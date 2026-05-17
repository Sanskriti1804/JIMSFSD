//service layer = ui should not know api details - should be a seperate layer
import api from "..api/axios";

//api call function - handles backend communication
//fetches dev data - domain data - merge them together - gives front ready data
export async function fetchDevelopersAndDomain(){
    try{
        //await - pause this function until all promises finishes
        //Promise.all - runs mul api req in parallel 
        const [developersRes, domainRes] = await Promise.all([
            api.get("/developers"),     //get request  for dev
            api.get("/domains")
        ]);

        //RESPONSE OBJ - extracting actaual json data from backend response
        const developers = developersRes.data;
        const domains = domainRes.data;

        //DATA TRANSFORMATION 
        //backend gives -> dev + domainId
        //frontend -> dev + domainName

        
        //dev.map - loops through every dev item in array and maps it with matched domain
        const mergedUsers = developers.map((developer) =>{
            const matchedDomain = domains.find(
                (domain) => domain.id === developers.domainId
            );

            //returnig transformed object
            return{
                //... - spread operator - copies all existing dev props
                ...developer,
                //add domain name if found or add unknown domain - instead of crashing
                domain : matchedDomain?.name || "Unknown Domain",
            };
        });
        
        //final result array for ui
        return mergedUsers;
    }catch(error){
        //error in browser console
        console.error("API FETCH ERROR:", error);

        //re-throwing error - allows ui layer to handle error
        //sends error to whover called this function not just console
        throw error;
    }
}
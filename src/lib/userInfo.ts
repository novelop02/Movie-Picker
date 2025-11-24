export let profile = {}
export async function getUserData(supabase:any, session:any) {

    const { data: profileData, error: profileError} = await supabase
            .from("profiles")
            .select("description, movies_ids, name, age")
            .eq("email", session?.user?.email); 
        
        if (profileData != null && profileData.length > 0) {
            profile = { ...profileData[0] };
        }
        
        return profile
} 


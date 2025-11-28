export async function getUserData(supabase:any, session:any) {
    if (!session?.user?.email) return {};

    const { data: profileData, error: profileError} = await supabase
            .from("profiles")
            .select("description, movies_ids, name, age")
            .eq("email", session.user.email); 
    if (profileData != null && profileData.length > 0) {
        return { ...profileData[0] };
    }
    return {}; 
}


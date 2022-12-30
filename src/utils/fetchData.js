
export const  exerciseOptions ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'511c23e475msh143ca71b60b605dp1d42cbjsn0602f0b63fdd'
    }
};

export const fetchData=async(url,options)=>{

    const response=await fetch(url,options);
    const data=await response.json();

    return data;

}
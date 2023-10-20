function updateMap()
{
     fetch("/data.json")
     .then(response => response.json())
     .then(rsp =>{
        console.log(rsp)
        rsp.forEach(element =>{
            latitude = element.latitude;
            longitude = element.longitude;
        })
     })

}

updateMap();
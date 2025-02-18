export default function Slills() {
  const ImagesData = [
    {
      imageUrl:
        "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg",
      name: "Angular",
    },
    {
      imageUrl:
        "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg",
      name: "HTML",
    },
   
  ];
    return (
      <div>
        <h3>Skills</h3>
        <div>
          <h4>Front-end</h4>
          <div>
            {ImagesData?.map((data, index) => {
              return (
                <div key={index}>
                  <img src={data.imageUrl} alt={data.name} className=" w-[40px] h-[40px] " />
                  <p>{data.name}</p>
                </div>
              );
            })}
           
          </div>
        </div>
      </div>
    );
}
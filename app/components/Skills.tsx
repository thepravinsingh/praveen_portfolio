import Image from "next/image";

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
                <div className="w-[40px] h-[40px] relative">
                  <Image
                    src={data.imageUrl}
                    alt={data.name}
                    className=" object-fill"
                    width={500}
                    height={500}
                  />
                </div>

                <p>{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

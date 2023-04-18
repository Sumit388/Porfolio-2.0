//Package imports
import Image, { StaticImageData } from "next/image";

interface Props {
  data:{
    image: string;
    codeLink: string;
    deployedLink: string;
    documenationLink: string;
    projectName: string;
    projectDescription: string;
    techUsed: string;
}
}

function ProjectSliderCard({data}: Props) {
  return (
    <>
      <div className="h-[49%] overflow-hidden relative flex justify-end items-start flex-col">
        <div className="h-8 text-gray-500 ml-2">
          {"Scroll right for more projects >"}
        </div>
        <div className="overflow-hidden h-[60%] flex justify-center items-center rounded-xl ">
          <img src={data.image}/>
          <div className="bg-gradient-to-t from-[#000000] to-transparent h-[60%] w-full z-20 absolute bottom-0 left-0" />
          <div className="h-[60%] w-full z-20 absolute bottom-2 left-2 flex justify-start items-end gap-4">
            <button className="border border-[#f7ac0a44] md:px-8 px-2 py-2 rounded-2xl bg-[#24242443] md:uppercase md:tracking-[2px] text-gray-500" 
            onClick={() => {
              window.open(data.codeLink)}}
            >
              Code Link
            </button>
            <button className="border border-[#f7ac0a44] md:px-8 px-2 py-2 rounded-2xl bg-[#24242443] md:uppercase md:tracking-[2px] text-gray-500"
            onClick={() => {
              window.open(data.deployedLink)}}
            >
              Deployed link
            </button>
            <button className="border border-[#f7ac0a44] md:px-8 px-2 py-2 rounded-2xl bg-[#24242443] md:uppercase md:tracking-[2px] text-gray-500"
            onClick={() => {window.open(data.documenationLink)}}
            >
              Documentation
            </button>
          </div>
        </div>
      </div>
      <div className="h-[2%]">
        <div className="mr-3 md:w-[46vw] w-[80vw] h-1 primaryGradient z-20 " />
      </div>
      <div className="h-[49%] flex justify-start items-start flex-col">
        <div className="h-[50%] flex md:flex-row flex-col justify-start items-center">
          <div className="md:h-[100px] md:min-w-[268px] min-w-screen elevatedEffect slide flex justify-center items-center gap-6 uppercase tracking-[5px] text-gray-500">
            <p className="p-4 text-center">{data.projectName}</p>
          </div>
          <div className="md:ml-10 md:w-auto w-screen md:px-auto px-2">
            {data.projectDescription}
          </div>
        </div>
        <div className="h-[46%] glassEffect w-[96%] ml-3 bg-[#ff1e1e0f] flex md:flex-row flex-col justify-start md:items-center items-start p-10 uppercase tracking-[5px] text-gray-500">
          <div className="md:border-r-2 md:h-[100%] md:text-center md:p-10">
            <p>Tech used:</p>
          </div>
          <div className="pl-4">
            {data.techUsed}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSliderCard;

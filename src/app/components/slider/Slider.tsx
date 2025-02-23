import Image from "next/image";

export default function Slider() {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/html.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/css.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/js.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/jQuery.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/php.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/laravel.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/sql.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/react.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
      <div className="h-[100px] w-[100px]">
        <Image
          src={"/images/node.png"}
          alt="HTML"
          width={100}
          height={100}
          priority={true}
          style={{ width: "100px", height: "100px" }}
          className="w-100 h-100"
        ></Image>
      </div>
    </div>
  );
}

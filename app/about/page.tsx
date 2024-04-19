import "@/styles/home/Home.scss";

export default function About() {
  return (
    <div className="work-outer bg-slate-50 w-[100dvw] h-[100dvh] relative overflow-hidden">
      <div className="work-picture bg-slate-50 w-full h-full bg-cover bg-center bg-[url('/images/main_vision.webp')]" />
      <div className="work-info absolute top-24 left-1/2 -translate-x-1/2 max-h-[calc(100dvh-8rem)] w-[calc(100dvw-8rem)] text-white text-center backdrop-blur-md bg-white/30 px-8 py-6 rounded-xl max-[800px]:w-[calc(100dvw-4rem)] overflow-auto">
        <div className="wrapper w-full h-full flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white max-[800px]:text-3xl">
            關於明道高中美展
          </h1>
          <p className="my-2">
            我們選用了「夢艷」二字來詮釋第七屆明道高中美展的精神。
            「夢」代表著美展團隊在佈展的時光，這段光陰在高中三年的旅程中就好似一場夢一樣短暫，卻發生了許多平常體驗的趣事、認識了沒有美展就不會有交集的朋友；同時也代表貴賓們在看展時的時光，但願這個展覽會帶給您如夢一般與眾不同的體驗。
            「艷」意同「豔」，有美好、華麗的意思，我們特別選用了「色」字邊的字型以契合創作時需要運用許多色彩的意象。它說明了這場展覽將會帶給大家的是一場華麗的觀展體驗，以最完美、多彩之姿呈現給各位來看展覽的看展者。同時也是表達了「希望第七屆明道美展能夠帶給佈展者、觀展者一個美好回憶」的願景。
            當「夢艷」二字組合在一起除了涵蓋二字原本的含義，更昇華出更上一層樓的意義。其中，如果細品這兩個字不難發現它音同「夢魘」，我們想表達在高中勞碌繁忙就如「夢魘」的時光中「夢艷」就是那一道光，讓大家想起除了追求成績之外，還有許多更重要的事情。對我們來說，高中美展就是那道值得追求的光，但願它也能帶給觀展者同樣的感受！
          </p>
        </div>
      </div>
    </div>
  );
}

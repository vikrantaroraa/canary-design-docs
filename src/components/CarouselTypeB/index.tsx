import {
  CarouselTypeB,
  ImagePanel,
  UserIndicatorComponent,
  UserNavigationButtons,
} from "canary-design";

const images = [
  "https://cdn.jwplayer.com/v2/media/THP7cYwK/poster.jpg?width=720",
  "https://www.beautifulworld.com/wp-content/uploads/2016/10/buffalo-yellowstone-national-park.jpg",
  "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1170,h_780/w_72,x_13,y_13,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rcoclkcqcpyoogx1rbvl/4-DayYellowstoneNationalParkLuxuryTourfromSaltLakeCity.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-07/220708-bison-sj-424p-99b8b1.jpg",
  "https://images.squarespace-cdn.com/content/v1/57afe07729687fbd6a7971ad/1471718394640-AYK8C3POPTKL2GU5DGRM/Glacier.National.Park.original.494.jpg?format=2500w",
];

function ExampleCarouselTypeB() {
  return (
    <div>
      <CarouselTypeB
        rotate
        UserIndicatorComponent={(props) => (
          <UserIndicatorComponent {...props} />
        )}
        UserNavigationButtons={(props) => <UserNavigationButtons {...props} />}
      >
        {images.map((image, index) => (
          <ImagePanel key={index}>
            <img src={image} alt="" />
          </ImagePanel>
        ))}

        {/* Note:-  We can either map over the images array to render images using <ImagePanel> component or 
        we can write all <ImagePanel> components manually passing them the <img> tag and image index, both 
        works fine. However, using map is a better approach as it ensures that we do not add any extra or any 
        less <ImagePanel> components  */}

        {/* <ImagePanel>
          <img src={images[0]} alt="" />
        </ImagePanel>
        <ImagePanel>
          <img src={images[1]} alt="" />
        </ImagePanel>
        <ImagePanel>
          <img src={images[2]} alt="" />
        </ImagePanel>
        <ImagePanel>
          <img src={images[3]} alt="" />
        </ImagePanel>
        <ImagePanel>
          <img src={images[4]} alt="" />
        </ImagePanel> */}
      </CarouselTypeB>
    </div>
  );
}

export { ExampleCarouselTypeB };

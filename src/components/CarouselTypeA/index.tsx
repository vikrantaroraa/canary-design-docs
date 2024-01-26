import {
  CarouselTypeA,
  UserIndicatorComponent,
  UserNavigationButtons,
} from "canary-design";

const images = [
  "https://images.squarespace-cdn.com/content/v1/57afe07729687fbd6a7971ad/1471718394640-AYK8C3POPTKL2GU5DGRM/Glacier.National.Park.original.494.jpg?format=2500w",
  "https://cdn.jwplayer.com/v2/media/THP7cYwK/poster.jpg?width=720",
  "https://www.beautifulworld.com/wp-content/uploads/2016/10/buffalo-yellowstone-national-park.jpg",
  "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1170,h_780/w_72,x_13,y_13,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/rcoclkcqcpyoogx1rbvl/4-DayYellowstoneNationalParkLuxuryTourfromSaltLakeCity.jpg",
  "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-07/220708-bison-sj-424p-99b8b1.jpg",
];

function ExampleCarouselTypeA() {
  return (
    <div>
      <CarouselTypeA
        images={images}
        rotate
        /* the UserIndicatorComponent and the UserNavigationButtons are optional components */
        UserIndicatorComponent={(props) => (
          <UserIndicatorComponent {...props} />
        )}
        UserNavigationButtons={(props) => <UserNavigationButtons {...props} />}
      />
    </div>
  );
}

export { ExampleCarouselTypeA };

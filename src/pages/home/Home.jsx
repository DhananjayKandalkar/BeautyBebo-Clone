import React, { useState, useEffect } from "react";
import { FaAngleRight, FaListUl } from "react-icons/fa";

import {getNewProdReq, getNewProdSuc, getNewProdFail} from '../../Redux/action'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewArrProdFromServer, getCategProdFromServer } from "../../ApiRequest/Api";
import Pagination from "../../components/HomeC/Pagination";
import { categories, slideShow } from "./homeData";
import ImageCarousel from "../../components/HomeC/ImageCarousel";
import NewArrivalProductCard from "../../components/HomeC/NewArrivalProductCard";
import SingleIconCard from "../../components/HomeC/SingleIconCard";
import Loading_gif from '../../assets/loading_gif.gif';


import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Image,
  Text,
  Heading,
} from "@chakra-ui/react";




const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const {products, isLoading, isError} = useSelector((state) => {
    return {
      products: state.products,
      isLoading: state.isLoading,
      isError: state.isError
    }
  },shallowEqual)

  // console.log("components rerendering??")

  useEffect(() => {
    getNewProducts();
  }, [page]);


  const getNewProducts = () => {
    dispatch(getNewProdReq());
    return getNewArrProdFromServer(page)
      .then((response) => {
        dispatch(getNewProdSuc(response.data))
      })
      .catch((error) => {
        dispatch(getNewProdFail());
        console.log(error);
      });
  };


  // const getCategoryProducts = () => {
  //   return getCategProdFromServer()
  //     .then((response) => {
  //       setNewArrival(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }


  // useEffect(() => {
  //   getCategoryProducts();
  // }, []);


  const handlePageChange = (changingValue) => {
    setPage(page + changingValue);
  };


  return (
    <section>
      <Grid
        gridTemplateColumns={"25% 75%"}
        border={"1px solid rgb(236, 228, 228)"}
      >
        {/* ------------- All Categories ----------- */}

        <Stack spacing={3} padding={"1rem"}>
          <Flex gap={"2rem"} align={"center"}>
            <FaListUl />
            <Text fontWeight={"600"}>All Categories</Text>
          </Flex>
          {categories.filter(elem => elem.title!=='Eye').map((categ, i) => {
            return (
              <Flex key={categ.id} justify={"space-between"} align={"center"}>
                <Stack direction={"row"} spacing={3} align={"center"}>
                  <Image src={categ.logo} alt={`products logo${i + 1}`} />
                  <Text>{categ.title}</Text>
                </Stack>
                <FaAngleRight color={"var(--lightGrey_Txt3)"} />
              </Flex>
            );
          })}
        </Stack>
        <Box>
          <ImageCarousel slideShow={slideShow} />
        </Box>
      </Grid>
      <Box padding={"2rem 0"}>
        <Image src={'https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg'} alt={"Blue Heaven Brand"} />
      </Box>

      {/* ------------- New Arrivals ----------- */}

      <Box>
        <Text
          borderBottom={"1px solid var(--primary_pink)"}
          width={"max-content"}
        >
          NEW ARRIVALS!
        </Text>
        <SimpleGrid columns={[2, 3, 4]} spacing={6} >

          {isLoading?<Image src={Loading_gif}/> : products?.map((product) => {
            return <NewArrivalProductCard key={product.id} {...product} />;
          })}
        </SimpleGrid>
        <Flex justify={"center"} padding={"2rem 0"}>
          <Pagination
            pages={page}
            totalPage={Math.floor(products.length + 1)}
            handlePageChange={handlePageChange}
          />
        </Flex>
      </Box>
      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        <Image src={'https://www.beautybebo.com/pub/media/ads/joy_banner.gif'} alt={"Beeone Mega Brand"} />
        <Image src={'https://www.beautybebo.com/pub/media/ads/lotus_banner.gif'} alt={"Lotus Mega Brand"} />
      </SimpleGrid>

      {/* --------------- single page brand products pendng----------- */}

      <SimpleGrid columns={7} mt={"2rem"}>
        {categories.filter((elem) => elem.title!=='Ayurveda').map((icon) => {
          const { id, logo, title } = icon;
          return <SingleIconCard key={id} logo={logo} title={title} />;
        })}
      </SimpleGrid>
      <SimpleGrid>

      </SimpleGrid>



      {/* --------------- brand box 3rd long Img ----------- */}

      <Box padding={"2rem 0"}>
        <Image src={'https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg'} alt={"Himalayas Brand"} />
      </Box>

      {/* ------------Best Seller, Latest Products, Most Viewed pending --------*/}

      {/* ------------brand box 4th long gif --------*/}

      <Box padding={"1rem 0"}>
        <Image src={'https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif'} alt="Offer Big Sale Gif" />
      </Box>

      {/* info box */}

      <Box
        padding={"2rem 0"}
        lineHeight={"2rem"}
        color={"var(--darkGrey_Txt2)"}
      >
        <Heading
          as={"h3"}
          size={"md"}
          mb={"1rem"}
          color={"var(--lightGrey_Txt1)"}
        >
          Welcome to Beauty Products Online Shopping India- Beauty Bebo
        </Heading>
        <Text>
          Beautybebo offer Welcome to Beauty Products Online Shopping India-
          Beauty Bebo If you are looking for a flawless radiant face outlook for
          a special occasion, then we have the perfect tips for you. As you must
          already know, the conspicuous flawless outlook you want for your
          wedding, a date, a dinner party or for a modelling competition is only
          achieved through makeup.
        </Text>
        <Text>
          Don’t get me wrong, you are naturally beautiful, that’s obvious. But
          everyone else is, so how will you will you ensure that you are
          different? Read on for hot irresistible tips before you buy beauty
          products online!
        </Text>
        <Text fontWeight={600}>Clean Your Face First!</Text>
        <Text>
          Before embarking on any makeup, always ensure that your face is clean.
          Need some assistance in absolute cleaning? Visit our range of face
          wash beauty products online for your best pick. We have made it our
          duty to carefully select the best products for you, so that you don’t
          experience breaks and allergies after use. So now you can be confident
          that your buy cosmetic online shopping will be worth your time and
          effort.
        </Text>
        <Text>
          Wondering then how you will make a choice among the spectrum
          available? Most of our products are purely natural in ingredient, so
          you can as well check for your favorite ingredient combination. If not
          sure, we are still here for you. We can help narrow down your options,
          together with you.
        </Text>
        <Text fontWeight={600}>Apply a Moisturizer</Text>
        <Text>Read More</Text>
      </Box>

      {/* ---------------------------- Footer --------------------------- */}
    </section>
  );
};

export default Home;
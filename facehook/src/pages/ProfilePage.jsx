import { useEffect } from "react";
import { actions } from "../actions";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";

import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";

const ProfilePage = () => {
  const { state, dispatch } = useProfile();

  //main api http://localhost:3000. Ekhane amra hook use kore, checking por, hook theke return kora api ta use korchi. Tahole lav ki holo? Ekhn auth e notun/fresh/valid token ta ache. Ei valid token e server e request korar somoy pathano hobe.

  //r ekta bepar holo: ei   const { api } = useAxios() er api ta asole Axios er upor ekta wrapper. Tarmane amra ei api er upor e aAxios er operations gulo korte parbo.

  //ekhane porti request er somoy login, registration page er moto formdata k pathano lagche na karon, hook er vitor Axios api request k intercept kore, fomrdaata k request er sathe include kore e pathabe. abar forbidden ba validation error asle internally, behind the scene setake manage kore, notun authToken ene, shei authToken use kore abar request kore, data niye anbe server theke.

  // Additional Info: Setting useState() (without an initial value):

  // JavaScript's default behavior for undeclared variables is to initialize them as undefined. This can lead to errors if you try to access user before it's assigned a value. Sohoj kotha e, initial render e to state er initial value diye e render hbe. To initial value declare na korle, undefined dhore nibe initial value. Tai problem na hle o, kono initial value na deya preferred na.

  // Always initialize useState: Provide an initial value (e.g., null, an empty string, an object) to avoid potential undefined behavior. This makes your code more predictable and easier to debug.
  // Choose the appropriate initial value: Consider what user represents in your component and choose an initial value that accurately reflects its state. For example, if user holds an object with properties, initialize it as {} (empty object).

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [api, auth?.user?.id, dispatch]);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};

export default ProfilePage;

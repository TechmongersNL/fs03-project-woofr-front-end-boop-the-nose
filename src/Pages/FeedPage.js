import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Postfeed from "../components/FeedComponents/Postfeed";
import TitleBar from "../components/FeedComponents/TitleBar";
import WoofForm from "../components/FeedComponents/WoofForm";
import { getWoofsThunk } from "../store/Woofs/thunks";
import { isLoggedIn } from "../store/Auth/selectors";
import { useNavigate } from "react-router-dom";

export default function FeedPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector(isLoggedIn);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }

    dispatch(getWoofsThunk());
  }, [loggedIn, dispatch, navigate]);

  return (
    <div>
      <TitleBar />
      {/* Added a placeholder for titlebar */}
      <WoofForm />
      <Postfeed />
    </div>
  );
}

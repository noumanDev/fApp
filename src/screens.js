/* eslint-disable import/prefer-default-export */
import { Navigation } from "react-native-navigation";

import Drawer from "./modules/_global/Drawer";
import Movies from "./modules/movies/Movies";
import MoviesList from "./modules/movies/MoviesList";
import Movie from "./modules/movies/Movie";
import Search from "./modules/movies/Search";
import PhoneVerify from "./modules/auth/PhoneVerify";
import LocationPicker from "./modules/googleMap/LocationPicker";

export function registerScreens(store, Provider) {
	Navigation.registerComponent(
		"auth.PhoneVerify",
		() => PhoneVerify,
		store,
		Provider
	);

	Navigation.registerComponent(
		"GoogleMap.LocationPicker",
		() => LocationPicker,
		store,
		Provider
	);
	
	Navigation.registerComponent(
		"movieapp.Movie",
		() => Movie,
		store,
		Provider
	);
	Navigation.registerComponent(
		"movieapp.Movies",
		() => Movies,
		store,
		Provider
	);
	Navigation.registerComponent(
		"movieapp.MoviesList",
		() => MoviesList,
		store,
		Provider
	);
	Navigation.registerComponent(
		"movieapp.Search",
		() => Search,
		store,
		Provider
	);
	Navigation.registerComponent("movieapp.Drawer", () => Drawer);
}

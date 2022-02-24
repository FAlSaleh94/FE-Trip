import api from "./api";
import { makeAutoObservable } from "mobx";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];
  loding = true;

  fetchtrips = async () => {
    try {
      const res = await api.get("/trips");
      this.trips = res.data;
      this.loding = false;
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchtrips();

export default tripStore;

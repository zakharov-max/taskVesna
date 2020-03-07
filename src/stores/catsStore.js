import { action, computed, observable } from "mobx";
import { getData, getInfo, url } from "../api";

export class CatsStore {
  constructor() {
    this.getCats();
  }

  @observable storedCats = [];

  @observable selectedCat;

  @observable filter = "";

  @computed
  get cats() {
    const result = !this.filter
      ? this.storedCats
      : this.storedCats.filter(cat =>
          cat.name.toLowerCase().includes(this.filter.toLowerCase())
        );

    return result.sort(x => (!x.isSuspended ? -1 : 1));
  }

  @computed
  get cat() {
    return (
      this.selectedCat && {
        id: this.selectedCat.id,
        name: this.storedCats.find(cat => cat.id === this.selectedCat.id).name,
        bio: this.selectedCat.bio,
        img: this.selectedCat.img
      }
    );
  }

  @action("getCats")
  getCats = async () => {
    const response = await getData();
    this.storedCats = response.map(cat => ({
      id: cat.id,
      name: cat.name,
      shortInfo: cat.shortInfo,
      more: cat.more,
      isSuspended: false,
      suspendDate: undefined
    }));
  };

  @action("suspendCat")
  suspendCat = id => {
    const suspendInfo = new Date();
    this.storedCats = this.storedCats.map(cat =>
      cat.id === id
        ? {
            ...cat,
            isSuspended: !cat.isSuspended,
            suspendDate:
              !cat.isSuspended &&
              `${suspendInfo.getHours()}:${suspendInfo.getMinutes()}:${suspendInfo.getSeconds()}`
          }
        : cat
    );
  };

  @action
  getInfo = async id => {
    const response = await getInfo(id);
    this.selectedCat = {
      id: response.id,
      bio: response.bio,
      img: `${url}${response.pic}`
    };
  };

  @action("changeFilter")
  changeFilter = value => {
    this.filter = value;
  };
}

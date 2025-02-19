import {makeAutoObservable} from 'mobx';
import {Filter, Product} from '../types';
import {filterData} from '../data/data';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem extends Product {
  quantity: number;
}

class MainStore {
  list: Product[] = [];
  filteredList: Product[] = [];
  activeFilter: Filter = filterData[0];
  error: string | null = null;
  pointA: string = '';
  pointB: string = '';
  passengersCount: number = 0;
  departureDate: Date | null = null;
  departureTime: Date | null = null;
  arrivalDate: Date | null = null;
  arrivalTime: Date | null = null;
  flightDuration: string = '';
  flightCost: string = '';
  comment: string = '';
  selectedFilter: Filter | null = null;

  favorites: number[] = [];

  name: string = '';
  avatarUrl: string = '';
  showEditProfile: boolean = true;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ProductStore',
      properties: ['list', 'favorites', 'name', 'avatarUrl', 'showEditProfile'],
      storage: AsyncStorage,
    });
  }

  loadProducts = () => {
    try {
      this.applyFilter();
    } catch (error: any) {}
  };

  setFilter = (filter: Filter) => {
    this.activeFilter = filter;
    this.applyFilter();
  };

  setSelectedFilter = (filter: Filter) => {
    this.selectedFilter = filter;
  };

  private applyFilterAndSearch = () => {
    let filtered = this.list;

    // Применяем фильтр по категории
    if (this.activeFilter.name.toLowerCase() !== 'all flights') {
      filtered = filtered.filter(
        product =>
          product.category.toLowerCase() ===
          this.activeFilter.name.toLowerCase(),
      );
    }

    this.filteredList = filtered;
  };

  private applyFilter = () => {
    this.applyFilterAndSearch();
  };

  setPointA = (value: string) => {
    this.pointA = value;
  };

  setPointB = (value: string) => {
    this.pointB = value;
  };

  handlePlusPassengers = () => {
    this.passengersCount += 1;
  };

  handleMinusPassengers = () => {
    if (this.passengersCount > 0) {
      this.passengersCount -= 1;
    }
  };

  setDepartureDate = (date: Date | null) => {
    this.departureDate = date;
  };

  setDepartureTime = (time: Date | null) => {
    this.departureTime = time;
  };

  setArrivalDate = (date: Date | null) => {
    this.arrivalDate = date;
  };

  setArrivalTime = (time: Date | null) => {
    this.arrivalTime = time;
  };

  setFlightDuration = (duration: string) => {
    this.flightDuration = duration;
  };

  setFlightCost = (value: string) => {
    this.flightCost = value;
  };

  setComment = (value: string) => {
    this.comment = value;
  };

  setName = (value: string) => {
    this.name = value;
  };

  setAvatarUrl = (value: string) => {
    this.avatarUrl = value;
  };

  setShowEditProfile = (value: boolean) => {
    this.showEditProfile = value;
  };

  createProduct = () => {
    const newProduct: Product = {
      pointA: this.pointA,
      pointB: this.pointB,
      passengers: this.passengersCount,
      dateDeparture: this.departureDate?.toISOString() || '',
      dateArrival: this.arrivalDate?.toISOString() || '',
      duration: this.flightDuration,
      category: this.selectedFilter?.name ?? '',
      cost: this.flightCost,
      comment: this.comment,
    };

    this.list.unshift(newProduct);
    this.resetFlightData();
  };

  resetFlightData = () => {
    this.pointA = '';
    this.pointB = '';
    this.passengersCount = 0;
    this.departureDate = null;
    this.departureTime = null;
    this.arrivalDate = null;
    this.arrivalTime = null;
    this.flightDuration = '';
    this.flightCost = '';
    this.comment = '';
  };

  toggleFavorite = (id: number) => {
    if (this.favorites.includes(id)) {
      this.favorites = this.favorites.filter(i => i !== id);
    } else {
      this.favorites.push(id);
    }
  };
}

export default MainStore;

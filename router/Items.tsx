import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import views here :P
import HomeView from '../views/Home'
import MapView from '../views/Map'
import NewsView from '../views/News'
import ShareView from '../views/Share'
import FlashView from '../views/Flash'

const items = [
  {
    name: 'Home',
    component: HomeView,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="home" color={color} size={size}/>
      ),
    },
  },
  {
    name: 'Map',
    component: MapView,
    options: {
      tabBarLabel: 'Map',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="map-search" color={color} size={size}/>
      ),
    },
  },
  {
    name: 'News',
    component: NewsView,
    options: {
      tabBarLabel: 'News',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="newspaper-variant" color={color} size={size}/>
      ),
    },
  },
  {
    name: 'Share',
    component: ShareView,
    options: {
      tabBarLabel: 'Share',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="share-variant" color={color} size={size}/>
      ),
    },
  },
  {
    name: 'Flash',
    component: FlashView,
    options: {
      tabBarLabel: 'Flash',
      tabBarIcon: ({color, size}) => (
        <MaterialCommunityIcons name="camera-control" color={color} size={size}/>
      ),
    },
  }
]

// TODO change any type
export default function (Tab: any) {
  let list: JSX.Element[] = []

  for (let i = 0; i < items.length; i++) {
    const el = items[i];
    list.push(
      <Tab.Screen 
        key={i}
        name={el.name} 
        component={el.component}
        options={el.options} 
      />
    )
  }

  return list
}
import React from 'react'
import { Slot } from 'expo-router';
import { StrictMode } from 'react';

const RootLayout = () => {
  return (
    <React.Fragment>
        <Slot />
    </React.Fragment>
  )
}

export default RootLayout;
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const IconHandler = (focused, color, size = 24, icon) => (
    <MaterialCommunityIcons name={icon} size={size} color={color} />
  );

  export default IconHandler;
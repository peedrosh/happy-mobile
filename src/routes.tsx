import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OrphanagesMap from './screens/OrphanagesMap'
import OrphanageDetails from './screens/OrphanageDetails'
import OrphanageData from './screens/OrphanageData'
import SelectMapPosition from './screens/SelectMapPosition'
import Header from './components/Header'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' }}}>
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen
        name="OrphanageDetails"
        component={OrphanageDetails}
        options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Orfanato" />
        }}
      />
      <Screen
        name="OrphanageData"
        component={OrphanageData}
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no mapa" />
        }}
      />
      <Screen
        name="SelectMapPosition"
        component={SelectMapPosition}
        options={{
          headerShown: true,
          header: () => <Header title="Informe os dados" />
        }}
      />
    </Navigator>
  </NavigationContainer>
)

export default Routes

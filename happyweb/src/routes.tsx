import React from 'react'
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'

import Landing from './pages/Landing'
import OrphanagesMap from './pages/OrphanagesMap'
import orphanage from './pages/Orphanage'
import createOrphanage from './pages/CreateOrphanage'

function Routes(){
    return(
        <BrowserRouter>
        <switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/app/" component={OrphanagesMap}/>
          <Route path="/orphanages/create" component={createOrphanage}/>
          <Route path="/orphanages/:id" component={orphanage}/>
        </switch>
        </BrowserRouter>
    )
}

export default Routes
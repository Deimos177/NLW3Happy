import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FiPlus, FiArrowRight, FiArrowLeft} from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { useHistory } from 'react-router-dom';
import api from '../services/api';

import mapMarkerImg from '../images/map-marker.svg'
import mapIcon from '../utils/mapIcon'

import '../styles/pages/orphanages-map.css'

interface Orphange{
  id: number,
  latitude: number,
  longitude: number,
  name: string
}

function OrphanagesMap(){
  //state devolve o valor e uma função para alterar o valor
  const [orphanages, setOrphanages] = useState<Orphange[]>([])

  //use state cria um ciclo de renderização, fazendo com que qualquer alteração reflita na tela.

  useEffect(()=> {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  const {goBack} = useHistory()
    return(
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>

            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
            <strong>São Paulo</strong>
            <span>São Paulo</span>
            <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
            </button>
          </footer>
        </aside>

        <Map 
        center={[-23.5680982,-46.6700479]}
        zoom={15}
        style={{width: '100%', height: '100%'}}
        >
            {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            {orphanages.map(orphanage => {
              return(
                <Marker
                  key={orphanage.id} 
                  icon={mapIcon}
                  position={[orphanage.latitude,orphanage.longitude]}>
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    {orphanage.name}
                    <Link to={`orphanages/${orphanage.id}`}>
                      <FiArrowRight size={20} color="FFF"/>
                    </Link>
                  </Popup>
                </Marker>
              )
            })}
        </Map>

        <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#fff"/>
        </Link>
      </div>
    )
}

export default OrphanagesMap
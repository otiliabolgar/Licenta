import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonRange, IonItem, IonLabel,IonButton, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Location App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
   

      <IonSearchbar></IonSearchbar>
      {/* <IonItem> */}
            <IonRange min={1} max={20} color="secondary">
              <IonLabel slot="start">1</IonLabel>
              <IonLabel slot="end">20</IonLabel>
            
            </IonRange>
          {/* </IonItem> */}
          <IonButton color="primary" size="large" expand="block" fill="outline">Unde ma aflu?</IonButton>
         
    <IonButton color="secondary" size="large" expand="block" fill="outline" >Gaseste locatiile</IonButton>
        
    
    <IonButton color="tertiary" size="large" expand="block" fill="outline" >Care e cea mai aproape?</IonButton>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
       
      </IonContent>
     
    </IonPage>
    
  );
};

export default Tab1;

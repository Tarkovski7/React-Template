import React from "react";
import Card from "./components/Card/Card";

export default function CardDeneme() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1>Card Bileşeni Testi</h1>

          {/* Birincil kart bileşeni */}
          <Card raised={true} color="primary">
            <h2>Primary Raised Card</h2>
            <p>This is some content inside the primary card.</p>
          </Card>

          {/* Başarı kart bileşeni */}
          <Card color="success" profile={true}>
            <h2>Success Profile Card</h2>
            <p>This is a profile card with success color.</p>
          </Card>

          {/* Bilgi kart bileşeni */}
          <Card color="info" raised={true}>
            <h2>Info Raised Card</h2>
            <p>This card provides some information.</p>
          </Card>

          {/* Uyarı kart bileşeni */}
          <Card color="warning">
            <h2>Warning Card</h2>
            <p>This is a warning card.</p>
          </Card>

          {/* Tehlike kart bileşeni */}
          <Card color="danger" raised={true}>
            <h2>Danger Raised Card</h2>
            <p>This is a danger card. Be careful!</p>
          </Card>

          {/* Gülümseme kartı */}
          <Card color="rose">
            <h2>Rose Card</h2>
            <p>This card has a rose color.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}

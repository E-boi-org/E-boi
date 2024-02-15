import "./App.css";
import "../components/Header.css";
import "../components/Footer.css";
import "../components/SideBar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <div className="App">
          <Header />
        </div>
        <div className="Loja">
          <h1 color="">loja que vende bue de cenas</h1>
          <div className="text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum
            non arcu nec varius. Praesent condimentum congue nisi eget volutpat.
            Integer aliquet quis augue at euismod. Aenean magna sem, semper eu
            tristique eu, ullamcorper vel tellus. Aenean lacinia a tellus
            eleifend finibus. Quisque tempus convallis velit, non rutrum felis
            blandit eu. Morbi vulputate tempor tellus ac condimentum. Donec
            volutpat facilisis pretium. Phasellus non nibh ut massa tincidunt
            molestie. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Pellentesque ac lacus dignissim,
            varius velit vel, ullamcorper neque. Aliquam placerat nulla nisl,
            vitae euismod est elementum ut. Mauris bibendum dui ante, at
            imperdiet ante venenatis eu. Praesent auctor, lorem et tempor
            fermentum, justo dui fermentum mauris, sed placerat tellus dui eu
            ipsum. Pellentesque eleifend ex vitae lectus pharetra rhoncus.
            Aenean ut leo vel mi tempor convallis. Nulla auctor turpis quis urna
            ullamcorper, vel euismod quam vestibulum. In eu pretium enim. Nunc
            cursus dictum orci vel ultrices. Proin nulla nisi, feugiat eget
            pellentesque ut, tempus et lorem. Fusce nec fringilla leo, consequat
            tristique sapien. Etiam venenatis neque ac cursus finibus. Duis
            hendrerit varius elit in auctor. Sed feugiat laoreet velit a
            lobortis. Suspendisse blandit nunc in nisi mattis, vel lobortis
            mauris pretium. Vestibulum urna ligula, fermentum a eros ut, luctus
            semper leo. Sed vel justo sit amet sem viverra venenatis scelerisque
            ut libero. Curabitur a cursus quam. Aenean vitae purus non sapien
            consectetur consectetur. Curabitur nisi ipsum, pharetra sit amet
            cursus sit amet, faucibus a odio. Suspendisse sagittis cursus
            cursus. Fusce quis lacus sit amet libero sagittis iaculis in eget
            lacus. Fusce ut ante ac dui lacinia posuere non eu enim. Donec
            condimentum sapien odio, vitae molestie nibh scelerisque quis.
            Quisque in bibendum erat. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Integer mi lorem, molestie id semper in, tempus
            sit amet massa. Aliquam at arcu velit. Suspendisse mattis, turpis in
            cursus condimentum, odio quam pulvinar turpis, eu porttitor neque
            odio in metus. Donec sodales volutpat lorem ac maximus. Nullam
            venenatis nulla arcu, fermentum imperdiet est rhoncus eget.
            Suspendisse ultrices viverra scelerisque. Nam vestibulum, velit vel
            tincidunt porta, lectus elit dictum erat, nec euismod dolor ante
            egestas massa. Quisque non ultricies nisi. Phasellus dictum
            convallis lectus, quis cursus lectus. In ullamcorper luctus felis eu
            sollicitudin. Quisque volutpat ligula tellus, vel viverra ex feugiat
            eu. Duis id dapibus nibh. Donec suscipit sollicitudin cursus. Aenean
            condimentum turpis dui, quis pharetra ex mollis ut. Sed mattis, nunc
            vel consequat facilisis, sem mauris sollicitudin dui, a tincidunt
            leo est non est. Quisque id consectetur mauris. Pellentesque id
            accumsan dui. Nunc mattis aliquam pharetra. In eleifend consequat
            imperdiet. Suspendisse nisl velit, volutpat vehicula ante vitae,
            aliquam mattis orci. Etiam accumsan quis lacus ac bibendum. Sed sit
            amet ex mollis, ultrices mi et, pretium leo. Aliquam a fringilla
            neque. Aenean libero urna, tincidunt dapibus eleifend id, aliquet
            vel orci. In hac habitasse platea dictumst. Phasellus eu rhoncus
            sem, viverra elementum diam. Donec non sapien ligula. Proin ut urna
            lacinia, scelerisque ligula id, vehicula lacus. Etiam a est sit amet
            ligula tempor sollicitudin. Praesent venenatis, ipsum vitae mattis
            consectetur, risus nisi feugiat leo, ac euismod lectus nibh
            consequat quam. Quisque turpis metus, imperdiet at arcu vitae,
            eleifend egestas odio. Sed tortor mi, imperdiet vitae tortor vel,
            dictum luctus metus. Duis sit amet venenatis enim. Mauris sed velit
            quis nulla vulputate tristique et ac magna. Vivamus ut imperdiet
            arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Praesent id libero ut turpis pharetra ultricies et nec nisl. Fusce
            eget nisl turpis. Mauris eu neque ante. Morbi et mollis eros, quis
            bibendum lacus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed justo quam, faucibus non porta et, placerat at nisi. Nam
            in nisl id nulla venenatis ultrices. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Duis fringilla et elit non consequat.
            Maecenas ac maximus ante. Donec ultrices, ligula nec sodales
            efficitur, nisi magna bibendum lorem, at auctor ante metus vitae
            diam. Etiam consequat eu arcu non efficitur. Vivamus aliquam leo
            lorem, sit amet ultricies neque porta a. Curabitur luctus mi elit,
            ac suscipit nulla laoreet sed. Sed ac tincidunt risus. Vivamus nec
            luctus tortor, sit amet cursus velit. Vestibulum vestibulum purus ac
            consectetur convallis. Vivamus fermentum diam est, id lobortis ante
            rutrum at. Vestibulum urna quam, scelerisque quis nisl a, lobortis
            rhoncus purus. Nullam bibendum dolor ac dui volutpat convallis.
            Suspendisse eu imperdiet risus, vel tincidunt nunc. Mauris
            ullamcorper porttitor eros, sit amet suscipit quam semper sed. Duis
            vitae mi et leo interdum vulputate non in augue. Fusce porttitor,
            diam et aliquam ultricies, ante orci ultrices eros, quis iaculis
            augue mauris sit amet sapien. Duis laoreet faucibus consequat. Proin
            metus turpis, vestibulum vitae commodo a, sagittis eget mi. Sed eu
            commodo sem. Vivamus tincidunt sodales dui. Sed orci lectus,
            elementum eu ligula in, pretium volutpat erat. Aenean a ornare orci.
            In sed luctus massa, sit amet vehicula velit.{" "}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const tabs = (
    <Tabs>
        <TabList>
            <Tab>Szobák</Tab>
            <Tab>További lehetőségek</Tab>
            <Tab>Házirend</Tab>
        </TabList>
        <TabPanel>
        <p>A kiadó szálláshely igényesen kialakított, 75 m2 alapterületű, 1 háló szobával (3fő) + 1 nyitott galériával (3fő), nagy nappalival, étkezővel, teljesen felszerelt konyhával, fürdőszobával rendelkezik.</p>
        <p>A lakáshoz külön terasz tartozik, nagy zárt és parkosított udvarral ahol kiváló lehetőség nyílik különböző szabadidős programokhoz felnőttek és gyermekek részére egyaránt.</p>
        <p>Az apartmant családoknak, baráti társaságoknak ajánljuk a nagy egybefüggő légtere miatt.</p>
        <p>A lakáshoz külön terasz tartozik, nagy zárt és parkosított udvarral ahol kiváló lehetőség nyílik különböző szabadidős programokhoz felnőttek és gyermekek részére egyaránt.</p>
        </TabPanel>
        <TabPanel>
            <ul className="list">
                <li>Ingyenes parkolást biztosítunk az itt tartózkodásuk során a tökéletes kényelemért</li>
                <li>A 200 méterre lévő Balaton meglátogatása kiváló lehetőség. Annyira keveset kell utazni, hogy megcsodálhassák a Magyar-tengert, hogy mégcsak autót sem kell használatba venni.</li>
                <li>A lakás egész területén WIFI-t biztosítunk, amit magában foglal az ár. Így nem kell aggódni, hogy elzárva lesznek a külvilágtól</li>
            </ul>
        </TabPanel>
        <TabPanel>
            <ul className="list">
                <li>A foglalások véglegesítése az előleg beérkezését követően történik meg. Előlegigény 30 000 Ft mely a foglalást követő 3. napig kell beérkezzen</li>
                <li>Az előleg a foglalást követő 3. napig kell beérkezzen</li>
                <li>Az előleg vissza nem térítendő</li>
                <li>A foglalások véglegesítése az előleg beérkezését követően történik meg</li>
                <li>A tulajdonos a ház külön bejáratú lakrészében lakik</li>
                <li>Háziállatot nem fogadunk.</li>
                <li>Bejelentkezés: adott nap 14órától, 18 óráig.</li>
                <li>Kijelentkezés: adott nap '09 óráig</li>
                <li>Foglalások 7 éjszakára értelmezettek, és ennek a többszörösére</li>
                <li>A szálláshely Június 01-től Szeptember 01-ig bérelhető</li>
                <li>Elfogadott fizetőeszközök: készpénz, átutalás (Elfogadott pénznemek HUF, euro)</li>
                <li>A forintra váltás a Magyar Nemzeti Bank valutájának a középárfolyamán történik</li>
            </ul>                   
        </TabPanel>
    </Tabs>
)
export const why = (
    <div id="why-wrapper">
        <div>
            <h2>Miért válassza Balatonszárszót?</h2>
            <p>Szárszót a balatoni települések sorában leginkább a gyermekbarát jelzővel illetik, a déli part egyik legrendezettebb települése, ahol családbarát szolgáltatásokkal várják vendégeket.</p>
            <p>Nagy hangsúlyt fektetnek a szép virágokra, parkosításra, a Virágos Magyarországért környezetszépítő versenyben mindig részt vesznek, 2016-ban elnyerték az Év települése díjat.</p>
            <p>Balatonszárszó kényelmesen megközelíthető az M7-es autópályáról, a 7-es főútról és vasúton a Székesfehérvár-Gyékényes vonalon.</p>
            <p>A község több stranddal is rendelkezik, a legnagyobb és leglátogatottabb a fizetős központi strand, amely 2018-ban elnyerte a Kék hullám zászló minősítés négy csillagos fokozatát. További két ingyenes strand található a Móricz Zsigmond utcában és a Bendegúz téren.</p>
            <p>A horgászok a Balaton partján, valamint a környéken három horgásztónál is hódolhatnak szenvedélyüknek.</p>
            <p>Balatonszárszó neve összekapcsolódik József Attila tragikus halálával. A költő utolsó szárszói lakhelyén (egykor Horváth panzió) működik a József Attila Emlékház, ahol egy interaktív kiállításon a költő életének utolsó időszakát idézi fel, és emléket állítanak az egész életműnek a Petőfi Irodalmi Múzeum anyagából, valamint magántulajdonban lévő dokumentumok, fotók, tárgyak segítségével.</p>
            <p>Ortutay Tamás szobrászművész által készített, tehervagont formázó emlékmű is őrzi József Attila emlékét, ez a Tóparti parkban található.</p>
            <p>A szabadidő aktív eltöltésének főbb helyszíne a nyári Csukás Színház, mely 2011 óta fesztiválok, gyermek és felnőtt előadások helyszíne. Csukás István a hazai gyerekirodalom élő legendája, történetein több generáció nőtt fel és olyan népszerű mesehősök megalkotója, mint Süsü, a sárkány, Mirr-Murr, a kandúr, Pom Pom vagy a Nagy Ho-ho-ho-horgász. A Kossuth-díjas író, költő, Balatonszárszó díszpolgára, második otthonaként tekint Balatonszárszóra.</p>
        
        </div>        
    </div>
)
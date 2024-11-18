import { useParams } from "react-router-dom";
import "./AlbumItem.css";
import AlbumList from "../../components/AlbumList/AlbumList";

const albums = [
  {
    id: 1,
    title: "Que la Famille",
    imgSrc:
      "https://m.media-amazon.com/images/I/51aNO1PUtfL._UXNaN_FMjpg_QL85_.jpg",
    description:
      "Que la famille est le premier EP du duo de rap français PNL, sorti le 2 mars 2015.",
    songs: [
      {
        id: 1,
        title: "Je vis, je visser",
        audioSrc: "/audio/Que_la_Famille/01_Je_vis_je_visser.mp3",
      },
      { id: 2, title: "Lala", audioSrc: "/audio/Que_la_Famille/02_Lala.mp3" },
      {
        id: 3,
        title: "Différents",
        audioSrc: "/audio/Que_la_Famille/03_Differents.mp3",
      },
      {
        id: 4,
        title: "Obligés de prendre",
        audioSrc: "/audio/Que_la_Famille/04_Obliges_de_prendre.mp3",
      },
      {
        id: 5,
        title: "De la fenêtre au Ter Ter",
        audioSrc:
          "/audio/Que_la_Famille/05_De_la_fenetre_au_ter_ter_feat_bizon_ilinas_and_spion.mp3",
      },
      { id: 6, title: "PNL", audioSrc: "/audio/Que_la_Famille/06_PNL.mp3" },
      {
        id: 7,
        title: "J'comprends pas",
        audioSrc: "/audio/Que_la_Famille/07_Jcomprends_pas.mp3",
      },
      {
        id: 8,
        title: "Gala Gala",
        audioSrc: "/audio/Que_la_Famille/08_Gala_Gala.mp3",
      },
      {
        id: 9,
        title: "La petite voix",
        audioSrc: "/audio/Que_la_Famille/09_La_petite_voix.mp3",
      },
      {
        id: 10,
        title: "Athena",
        audioSrc: "/audio/Que_la_Famille/10_Athena_feat_rkm_1_ndirty_deh.mp3",
      },
      {
        id: 11,
        title: "Recherche du bonheur",
        audioSrc: "/audio/Que_la_Famille/11_Recherche_du_bonheur.mp3",
      },
      {
        id: 12,
        title: "Simba",
        audioSrc: "/audio/Que_la_Famille/12_Simba.mp3",
      },
    ],
  },
  {
    id: 2,
    title: "Le Monde Chico",
    imgSrc:
      "https://cdns-images.dzcdn.net/images/cover/3c0d34f7576d81c8f269570d9806fb88/500x500.jpg",
    description:
      "Le Monde Chico est le premier album studio de PNL, sorti le 30 octobre 2015.",
    song: [
      {
        id: 1,
        title: "Le monde ou rien",
        audioSrc: "/audio/Le_monde_Chico/01_Le_monde_ou_rien.mp3",
      },
      {
        id: 2,
        title: "Sur Paname",
        audioSrc: "/audio/Le_monde_Chico/02_Sur_Paname.mp3",
      },
      {
        id: 3,
        title: "Oh lala",
        audioSrc: "/audio/Le_monde_Chico/03_Oh_lala.mp3",
      },
      {
        id: 4,
        title: "J'vends",
        audioSrc: "/audio/Le_monde_Chico/04_Jvends.mp3",
      },
      {
        id: 5,
        title: "Abonné",
        audioSrc: "/audio/Le_monde_Chico/05_Abonne.mp3",
      },
      {
        id: 6,
        title: "J'suis PNL",
        audioSrc: "/audio/Le_monde_Chico/06_Jsuis_PNL.mp3",
      },
      {
        id: 7,
        title: "Mexico",
        audioSrc: "/audio/Le_monde_Chico/07_Mexico.mp3",
      },
      {
        id: 8,
        title: "Porte de Mesrine",
        audioSrc: "/audio/Le_monde_Chico/08_Porte_de_Mesrine.mp3",
      },
      {
        id: 9,
        title: "Dans ta rue",
        audioSrc: "/audio/Le_monde_Chico/09_Dans_ta_rue.mp3",
      },
      {
        id: 10,
        title: "Laisse",
        audioSrc: "/audio/Le_monde_Chico/10_Laisse.mp3",
      },
      {
        id: 11,
        title: "Loin des hommes",
        audioSrc: "/audio/Le_monde_Chico/11_Loin_des_hommes.mp3",
      },
      { id: 12, title: "Le M", audioSrc: "/audio/Le_monde_Chico/12_Le_M.mp3" },
      {
        id: 13,
        title: "Rebenga",
        audioSrc: "/audio/Le_monde_Chico/13_Rebenga_feat_RKM.mp3",
      },
      {
        id: 14,
        title: "Plus Tony que Sosa",
        audioSrc: "/audio/Le_monde_Chico/14_Plus_Tony_que_Sosa.mp3",
      },
      {
        id: 15,
        title: "Que la mif",
        audioSrc:
          "/audio/Le_monde_Chico/15_Que_la_mif_(feat. Spion, Pti_Moha,F430 & Ilinas).mp3",
      },
      {
        id: 16,
        title: "Tempête",
        audioSrc: "/audio/Le_monde_Chico/16_Tempete.mp3",
      },
      {
        id: 17,
        title: "Dans la soucoupe",
        audioSrc: "/audio/Le_monde_Chico/17_Dans_la_soucoupe.mp3",
      },
    ],
  },
  {
    id: 3,
    title: "Dans La Légende",
    imgSrc:
      "https://m.media-amazon.com/images/I/71dFTmV2jgL._UF1000,1000_QL80_.jpg",
    description:
      "Dans la légende est le deuxième album studio de PNL, sorti le 16 septembre 2016.",
    song: [
      { id: 1, title: "Da", audioSrc: "/audio/Dans_La_Legende/01_Da.mp3" },
      { id: 2, title: "Naha", audioSrc: "/audio/Dans_La_Legende/02_Naha.mp3" },
      {
        id: 3,
        title: "Dans la légende",
        audioSrc: "/audio/Dans_La_Legende/03_Dans_la_legende.mp3",
      },
      { id: 4, title: "Mira", audioSrc: "/audio/Dans_La_Legende/04_Mira.mp3" },
      {
        id: 5,
        title: "J'suis QLF",
        audioSrc: "/audio/Dans_La_Legende/05_Jsuis_QLF.mp3",
      },
      {
        id: 6,
        title: "La vie est belle",
        audioSrc: "/audio/Dans_La_Legende/06_La_vie_est_belle.mp3",
      },
      {
        id: 7,
        title: "Kratos",
        audioSrc: "/audio/Dans_La_Legende/07_Kratos.mp3",
      },
      {
        id: 8,
        title: "Luz de Luna",
        audioSrc: "/audio/Dans_La_Legende/08_Luz_de_Luna.mp3",
      },
      {
        id: 9,
        title: "Tu sais pas",
        audioSrc: "/audio/Dans_La_Legende/09_Tu_sais_pas.mp3",
      },
      {
        id: 10,
        title: "Sheita",
        audioSrc: "/audio/Dans_La_Legende/10_Sheita.mp3",
      },
      {
        id: 11,
        title: "Humain",
        audioSrc: "/audio/Dans_La_Legende/11_Humain.mp3",
      },
      {
        id: 12,
        title: "Bambina",
        audioSrc: "/audio/Dans_La_Legende/12_Bambina.mp3",
      },
      { id: 13, title: "Bené", audioSrc: "/audio/Dans_La_Legende/13_Bene.mp3" },
      {
        id: 14,
        title: "Uranus",
        audioSrc: "/audio/Dans_La_Legende/14_Uranus.mp3",
      },
      {
        id: 15,
        title: "Onizuka",
        audioSrc: "/audio/Dans_La_Legende/15_Onizuka.mp3",
      },
      {
        id: 16,
        title: "Jusqu'au dernier gramme",
        audioSrc: "/audio/Dans_La_Legende/16_Jusquau_dernier_gramme.mp3",
      },
      {
        id: 17,
        title: "Cramé",
        audioSrc: "/audio/Dans_La_Legende/17_Crame.mp3",
      },
    ],
  },
  {
    id: 4,
    title: "Deux Frères",
    imgSrc: "https://i.scdn.co/image/ab67616d0000b2736c3966c4dd0eb2273696fe16",
    description:
      "Deux Frères est le quatrième album studio de PNL, sorti le 5 avril 2019.",
    song: [
      { id: 1, title: "Au DD", audioSrc: "/audio/Deux_Frères/01_Au_DD.mp3" },
      {
        id: 2,
        title: "Autre Monde",
        audioSrc: "/audio/Deux_Frères/02_Autre_Monde.mp3",
      },
      { id: 3, title: "Chang", audioSrc: "/audio/Deux_Frères/03_Chang.mp3" },
      { id: 4, title: "Blanka", audioSrc: "/audio/Deux_Frères/04_Blanka.mp3" },
      { id: 5, title: "91's", audioSrc: "/audio/Deux_Frères/05_91s.mp3" },
      {
        id: 6,
        title: "À l'ammoniaque",
        audioSrc: "/audio/Deux_Frères/06_A_l_ammoniaque.mp3",
      },
      {
        id: 7,
        title: "Celsius",
        audioSrc: "/audio/Deux_Frères/07_Celsius.mp3",
      },
      {
        id: 8,
        title: "Deux Frères",
        audioSrc: "/audio/Deux_Frères/08_Deux_Freres.mp3",
      },
      {
        id: 9,
        title: "Hasta la Vista",
        audioSrc: "/audio/Deux_Frères/09_Hasta_la_vista.mp3",
      },
      { id: 10, title: "Coeurs", audioSrc: "/audio/Deux_Frères/10_Coeurs.mp3" },
      {
        id: 11,
        title: "Shenmue",
        audioSrc: "/audio/Deux_Frères/11_Shenmue.mp3",
      },
      {
        id: 12,
        title: "Kuta Ubud",
        audioSrc: "/audio/Deux_Frères/12_Kuta_Ubud.mp3",
      },
      { id: 13, title: "Menace", audioSrc: "/audio/Deux_Frères/13_Menace.mp3" },
      {
        id: 14,
        title: "Zoulou Tchaing",
        audioSrc: "/audio/Deux_Frères/14_Zoulou_Tchaing.mp3",
      },
      {
        id: 15,
        title: "Déconnecté",
        audioSrc: "/audio/Deux_Frères/15_Deconnecte.mp3",
      },
      {
        id: 16,
        title: "La misère est si belle",
        audioSrc: "/audio/Deux_Frères/16_La_misere_est_si_belle.mp3",
      },
      {
        id: 17,
        title: "Frontières",
        audioSrc: "/audio/Deux_Frères/17_Frontieres.mp3",
      },
      {
        id: 18,
        title: "Capuche",
        audioSrc: "/audio/Deux_Frères/18_Capuche.mp3",
      },
    ],
  },
];

function AlbumItem() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === Number.parseInt(id || "0"));

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="backgroundalbum">
      <AlbumList albums={[album]} />
    </div>
  );
}

export default AlbumItem;

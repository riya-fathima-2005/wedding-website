import React from "react";
import christianImage from "../../assets/Images/christian.jpg";
import muslimImage from "../../assets/Images/rokha.jpg";
import punjabiImage from "../../assets/Images/sikh.jpeg";
import southIndianImage from "../../assets/Images/southind.jpg";
import rajasthaniImage from "../../assets/Images/royalrajasthani.jpg";
import assameseImage from "../../assets/Images/assamese.jpg";

const Aboutweds = ({ weddingType = "christian" }) => {
  const weddingData = {
    christian: {
      title: "What Is An Indian Christian Wedding",
      image: christianImage,
      description:
        "An Indian Christian wedding is a magnificent tapestry, woven with threads of deep faith, ancient tradition, and the exuberant warmth of Indian hospitality. It is more than a ceremony; it is a day-long symphony of spiritual solemnity and celebratory joy, marking not just the union of two individuals, but the coming together of two families and communities.The day dawns with a sense of sacred anticipation. The ceremony, the central pillar of the celebration, takes place in a church, often beautifully adorned with fresh flowers—marigolds, roses, and jasmine—blending Christian symbolism with Indian aesthetic. The air is filled with the soft, hopeful notes of hymns, sung in regional languages or English, played on an organ or by a live choir. The congregation, a vibrant sea of color, gathers not just as witnesses, but as active participants in a divine covenant.Following the traditions of Christian liturgy, the service is conducted by a priest or pastor. It is a profound spiritual journey, structured around prayers, readings from the Bible (often from 1 Corinthians 13 on love, or the story of Cana), a sermon on the sanctity of marriage, and the exchanging of solemn vows before God. The pivotal moments—the declaration of intent, the giving away of the bride, the exchange of rings as symbols of eternal promise, and the lighting of a unity candle—are infused with a gravity that hushes the hall. The priest’s final proclamation, What God has joined together, let no one separate, rings out, followed by the first kiss as a married couple, met with joyful applause.",
    },
    muslim: {
      title: "What Is An Indian Muslim Wedding (Nikah)",
      image: muslimImage,
      description: `An Indian Muslim wedding, known as Nikah, is a sacred Islamic ceremony that unites two individuals in marriage. The ceremony is typically conducted by a Qazi (Islamic judge) in the presence of witnesses. Key rituals include the Mehr (mandatory gift from groom to bride), the signing of the Nikahnama (marriage contract), and the exchange of vows. The bride often wears a stunning lehenga or sharara, while the groom dons a sherwani or kurta-pajama. Traditional elements like the Mehndi ceremony, Sangeet, and the grand Walima reception add cultural richness. Indian Muslim weddings beautifully blend Islamic traditions with regional cultural practices, creating a celebration of faith, family, and lifelong commitment.`,
    },
    punjabi: {
      title: "What Is A Punjabi Wedding",
      image: punjabiImage,
      description: `A Punjabi wedding is a vibrant, multi-day celebration filled with music, dance, and rich traditions. Beginning with the Roka ceremony, it includes colorful events like the Mehndi, Sangeet, and the main Anand Karaj ceremony in a Gurudwara. The bride typically wears a red lehenga with elaborate gold jewelry, while the groom wears a sherwani or traditional kurta. The celebrations are marked by energetic Bhangra dances, lavish feasts featuring Punjabi cuisine like butter chicken and sarson ka saag, and the joyful ritual of Joota Chupai. Punjabi weddings are known for their grand scale, warm hospitality, and the spirit of "Balle Balle" that permeates every moment of the celebration.`,
    },
    southindian: {
      title: "What Is A South Indian Wedding",
      image: southIndianImage,
      description: `A South Indian wedding is an elegant and spiritually rich celebration deeply rooted in ancient Vedic traditions. The ceremonies vary across Tamil, Telugu, Malayalam, and Kannada cultures but share common elements. Key rituals include the Kashi Yatra, Kanyadaanam (giving away of the bride), Mangalya Dharanam (tying the sacred thread), Saptapadi (seven steps around the sacred fire), and Talambralu (showering with turmeric-scented rice). The bride typically wears a beautiful Kanchipuram silk saree with temple jewelry, while the groom wears a traditional dhoti and angavastram. South Indian weddings are known for their intricate kolam designs, classical music, vegetarian feasts, and the sacred ambiance created by Sanskrit mantras and traditional rituals.`,
    },
    rajasthani: {
      title: "What Is A Rajasthani Wedding",
      image: rajasthaniImage,
      description: `A Rajasthani wedding is a regal, colorful affair that reflects the royal heritage and desert culture of Rajasthan. The celebrations span several days, starting with the Tilak ceremony and including the vibrant Mehendi and Sangeet nights. The Pithi ceremony involves applying turmeric paste, while the Baraat (groom's procession) arrives on decorated horses or elephants. The bride wears a stunning red or maroon lehenga with heavy kundan and meenakari jewelry, while the groom dons a majestic sherwani with a safa (turban). Unique rituals like the Palla Ceremony (draping of the bride's saree) and the Mooh Dikhai (showing the bride's face) add cultural depth. The wedding is a grand spectacle of folk music, Ghoomar dance, camel decorations, and royal hospitality.`,
    },
    assamese: {
      title: "What Is An Assamese Wedding",
      image: assameseImage,
      description: `An Assamese wedding, known as "Biya" in Assamese, is a beautiful blend of Vedic rituals and unique Assamese traditions. The ceremonies are simple yet elegant, emphasizing purity and spirituality. Key rituals include the Juran Diya (gift-giving ceremony), Pani Tola (bride's water-fetching ceremony), and the main ceremony where the couple sits under a beautifully decorated "wedding hut" called "xorai". The bride wears a traditional Mekhela Chador, usually in white with red borders (Gamosa pattern), adorned with Assamese gold jewelry called "gam kharu" and "dhol biri". The groom wears a traditional dhoti and kurta with a "gamosa" around his neck. Assamese weddings feature Bihu folk music, traditional biya naam songs, and a feast with authentic Assamese cuisine like khar, tenga, and pithas.`,
    },
  };

  const data = weddingData[weddingType] || weddingData.christian;
  return (
    <div className="container mt-5">
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <img
            src={data.image}
            alt={data.title}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3 className="bloghead">{data.title}</h3>
          <p className="blogpara">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutweds;

import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'

import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import logo from './logo.svg'
import profile_pic from './profile_pic.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import arrow_icon from './arrow_icon.svg'
import header_img from './header_img.png'
import Decorative_Ceramics from './Decorative_Ceramics.png'
import Functional_Pottery from './Functional_Pottery.png'
import Glazed_Pottery from './Glazed_Pottery.png'

import Handcrafted_Clay_Sculpting from './Handcrafted_Clay_Sculpting.png'
import wheel_pottery from './wheel_pottery.png'
import amit_joshi from './amit_joshi.png'
import anita_patel from './anita_patel.png'
import arjun_verma from './arjun_verma.png'
import divya_rao from './divya_rao.png'
import harish_gupta from './harish_gupta.png'
import meera_sharma from './meera_sharma.png'
import neha_aggarwal from './neha_aggarwal.png'
import pooja_nair from './pooja_nair.png'
import priya_iyer from './priya_iyer.png'
import rajesh_yadav from './rajesh_yadav.png'
import ramesh_kumar from './ramesh_kumar.png'
import sanjay_mehta from './sanjay_mehta.png'
import suman_das from './suman_das.png'
import sunita_devi from './sunita_devi.png'
import vikram_singh from './vikram_singh.png'
import appointment_img from './appointment_img.png'
export const assets = {
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
   
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon,
    logo,
    profile_pic,
    dropdown_icon,
    group_profiles,
    arrow_icon,
    header_img,
    Decorative_Ceramics,
    Functional_Pottery,
    Glazed_Pottery,
   
    Handcrafted_Clay_Sculpting,
    wheel_pottery,
    amit_joshi,
    anita_patel,
    arjun_verma,
    divya_rao,
    harish_gupta,
    meera_sharma,
    neha_aggarwal,
    pooja_nair,
    priya_iyer,
    rajesh_yadav,
    ramesh_kumar,
    sanjay_mehta,
    suman_das,
    sunita_devi,
    vikram_singh,
    appointment_img
}

export const specialityData = [
    {
        speciality: 'Wheel Pottery',
        image: wheel_pottery
    },
    {
        speciality: 'Clay Sculpting',
        image: Handcrafted_Clay_Sculpting
    },
    
    {
        speciality: 'Glazed Pottery',
        image: Glazed_Pottery
    },
    {
        speciality: 'Functional Pottery',
        image: Functional_Pottery
    },
    {
        speciality: 'Decorative Ceramics',
        image: Decorative_Ceramics
    }

]
export const potteryArtists = [
    {
        _id: "1",
        name: "Ramesh Kumar",
        image: ramesh_kumar,
        speciality: "Traditional Terracotta Art",
        experience: "15 years",
        about: "A master of traditional Rajasthani terracotta pottery, Ramesh crafts exquisite clay artifacts and sculptures.",
        fees: "₹800 per session",
        address: {
            line1: "Near Hawa Mahal",
            line2: "Jaipur, Rajasthan"
        }
    },
    {
        _id: "2",
        name: "Meera Sharma",
        image: meera_sharma,
        speciality: "Handcrafted Clay Sculpting",
        experience: "12 years",
        about: "Meera specializes in delicate clay figurines and sculpting techniques passed down through generations.",
        fees: "₹1000 per session",
        address: {
            line1: "MG Road",
            line2: "Bengaluru, Karnataka"
        }
    },
    {
        _id: "3",
        name: "Arjun Verma",
        image: arjun_verma,
        speciality: "Wheel Pottery",
        experience: "10 years",
        about: "Arjun's expertise lies in the ancient art of wheel pottery, creating unique, handmade ceramic pieces.",
        fees: "₹700 per session",
        address: {
            line1: "Sardar Patel Marg",
            line2: "New Delhi, Delhi"
        }
    },
    {
        _id: "4",
        name: "Sunita Devi",
        image: sunita_devi,
        speciality: "Glazed Pottery",
        experience: "18 years",
        about: "Sunita is known for her vibrant glazed pottery, bringing life to clay with stunning colors and textures.",
        fees: "₹1200 per session",
        address: {
            line1: "Connaught Place",
            line2: "New Delhi, Delhi"
        }
    },
    {
        _id: "5",
        name: "Vikram Singh",
        image: vikram_singh,
        speciality: "Functional Pottery",
        experience: "9 years",
        about: "Vikram crafts everyday-use pottery like bowls and mugs, focusing on durability and aesthetics.",
        fees: "₹900 per session",
        address: {
            line1: "Charminar Road",
            line2: "Hyderabad, Telangana"
        }
    },
    {
        _id: "6",
        name: "Anita Patel",
        image: anita_patel,
        speciality: "Decorative Ceramics",
        experience: "14 years",
        about: "Anita’s decorative ceramic pieces are perfect for home decor, blending modern and traditional designs.",
        fees: "₹1100 per session",
        address: {
            line1: "Ashram Road",
            line2: "Ahmedabad, Gujarat"
        }
    },
    {
        _id: "7",
        name: "Rajesh Yadav",
        image: rajesh_yadav,
        speciality: "Wheel Pottery",
        experience: "8 years",
        about: "Rajesh enjoys teaching beginners the art of wheel pottery and helping them craft their first masterpiece.",
        fees: "₹600 per session",
        address: {
            line1: "T Nagar",
            line2: "Chennai, Tamil Nadu"
        }
    },
    {
        _id: "8",
        name: "Pooja Nair",
        image: pooja_nair,
        speciality: "Handcrafted Clay Sculpting",
        experience: "11 years",
        about: "Pooja creates intricate clay sculptures, drawing inspiration from Indian mythology and nature.",
        fees: "₹950 per session",
        address: {
            line1: "Koregaon Park",
            line2: "Pune, Maharashtra"
        }
    },
    {
        _id: "9",
        name: "Sanjay Mehta",
        image: sanjay_mehta,
        speciality: "Traditional Terracotta Art",
        experience: "20 years",
        about: "Sanjay specializes in making terracotta lamps, pots, and decorative items using ancient techniques.",
        fees: "₹1300 per session",
        address: {
            line1: "Old City",
            line2: "Varanasi, Uttar Pradesh"
        }
    },
    {
        _id: "10",
        name: "Divya Rao",
        image: divya_rao,
        speciality: "Glazed Pottery",
        experience: "7 years",
        about: "Divya’s pottery is known for its glossy finish and unique textures, making each piece one of a kind.",
        fees: "₹850 per session",
        address: {
            line1: "Marine Drive",
            line2: "Mumbai, Maharashtra"
        }
    },
    {
        _id: "11",
        name: "Harish Gupta",
        image: harish_gupta,
        speciality: "Functional Pottery",
        experience: "16 years",
        about: "Harish creates high-quality, functional pottery that blends tradition with modern needs.",
        fees: "₹1000 per session",
        address: {
            line1: "Salt Lake City",
            line2: "Kolkata, West Bengal"
        }
    },
    {
        _id: "12",
        name: "Suman Das",
        image: suman_das,
        speciality: "Decorative Ceramics",
        experience: "13 years",
        about: "Suman specializes in beautifully crafted ceramic wall plates, vases, and showpieces.",
        fees: "₹1150 per session",
        address: {
            line1: "Guwahati Central",
            line2: "Guwahati, Assam"
        }
    },
    {
        _id: "13",
        name: "Neha Aggarwal",
        image: neha_aggarwal,
        speciality: "Wheel Pottery",
        experience: "6 years",
        about: "Neha’s pottery workshops are fun and engaging, making pottery accessible to all skill levels.",
        fees: "₹750 per session",
        address: {
            line1: "Sector 17",
            line2: "Chandigarh, Punjab"
        }
    },
    {
        _id: "14",
        name: "Amit Joshi",
        image: amit_joshi,
        speciality: "Handcrafted Clay Sculpting",
        experience: "17 years",
        about: "Amit's sculptures reflect his passion for storytelling through the medium of clay.",
        fees: "₹1400 per session",
        address: {
            line1: "MI Road",
            line2: "Jaipur, Rajasthan"
        }
    },
    {
        _id: "15",
        name: "Priya Iyer",
        image: priya_iyer,
        speciality: "Glazed Pottery",
        experience: "9 years",
        about: "Priya creates elegant, hand-painted pottery with a smooth, glazed finish.",
        fees: "₹900 per session",
        address: {
            line1: "Anna Salai",
            line2: "Chennai, Tamil Nadu"
        }
    }
]
export default potteryArtists


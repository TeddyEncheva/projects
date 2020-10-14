import { Injectable } from '@angular/core';
import { Cast } from '../models/cast';

@Injectable({
  providedIn: 'root'
})
export class CastService {
  getAll(){
    return CAST;
  }
}

const CAST:Array<Cast> = [
    {
      "cast_id": 271,
      "character": "Roy McBride",
      "credit_id": "5e93b22dd55e4d001a19f94a",
      "gender": 2,
      "id": 287,
      "name": "Brad Pitt",
      "order": 1,
      "profile_path": "/tJiSUYst4ddIaz1zge2LqCtu9tw.jpg"
    },
    {
      "cast_id": 272,
      "character": "H. Clifford McBride",
      "credit_id": "5e93b248875d1a001944ef1d",
      "gender": 2,
      "id": 2176,
      "name": "Tommy Lee Jones",
      "order": 2,
      "profile_path": "/rdKKuq8zWCDYlKSxIfwGo2RUjpN.jpg"
    },
    {
      "cast_id": 273,
      "character": "Helen Lantos",
      "credit_id": "5e93b2afd55e4d001a19fa27",
      "gender": 1,
      "id": 17018,
      "name": "Ruth Negga",
      "order": 3,
      "profile_path": "/aL4nmTVtQU2uQDNdBCarTy413CZ.jpg"
    },
    {
      "cast_id": 274,
      "character": "Lieutenant General Rivas",
      "credit_id": "5e93b30c54508d001a177e3a",
      "gender": 2,
      "id": 40543,
      "name": "John Ortiz",
      "order": 4,
      "profile_path": "/o2SOFI53N6Gv5S3fDEBNbeimbzY.jpg"
    },
    {
      "cast_id": 275,
      "character": "Eve",
      "credit_id": "5e93b31f54508d001517734e",
      "gender": 1,
      "id": 882,
      "name": "Liv Tyler",
      "order": 5,
      "profile_path": "/jrOj6t9pH8TqO65pnsRuvRNhwqx.jpg"
    },
    {
      "cast_id": 276,
      "character": "Thomas Pruitt",
      "credit_id": "5e93b33154508d001a177e6a",
      "gender": 2,
      "id": 55636,
      "name": "Donald Sutherland",
      "order": 6,
      "profile_path": "/pvk7fjJNg9kZQTeuG6ZlfJ8t2Ze.jpg"
    },
    {
      "cast_id": 277,
      "character": "Chip Garnes",
      "credit_id": "5e93b52184448e001a90f074",
      "gender": 2,
      "id": 231,
      "name": "Greg Bryk",
      "order": 7,
      "profile_path": "/1I3SxKFvQSam6KOMT4j5f0nFxRg.jpg"
    },
    {
      "cast_id": 278,
      "character": "Donald Stanford",
      "credit_id": "5e93b531cedac4001bebaead",
      "gender": 2,
      "id": 11628,
      "name": "Loren Dean",
      "order": 8,
      "profile_path": "/zCYDwYJjrY4lpeueZYSzAXKLD5h.jpg"
    },
    {
      "cast_id": 279,
      "character": "Lorraine Deavers",
      "credit_id": "5e93b5428e87020014cd5d03",
      "gender": 1,
      "id": 55314,
      "name": "Kimberly Elise",
      "order": 9,
      "profile_path": "/pAYWZdsWYrGc9lvMCivUU7STSWf.jpg"
    },
    {
      "cast_id": 280,
      "character": "Brigadier General Stroud",
      "credit_id": "5e93b570ccb15f00136fe748",
      "gender": 2,
      "id": 9277,
      "name": "John Finn",
      "order": 10,
      "profile_path": "/caCHMsqfpfEcK1tUlkLWV9KkEbS.jpg"
    },
    {
      "cast_id": 281,
      "character": "Adjutant General Vogel",
      "credit_id": "5e93b58584448e001a90f131",
      "gender": 1,
      "id": 64908,
      "name": "LisaGay Hamilton",
      "order": 11,
      "profile_path": "/bqfowff4gF0cGaQ1c7F89HAL3DH.jpg"
    },
    {
      "cast_id": 282,
      "character": "Captain Lawrence Tanner",
      "credit_id": "5e93b5da8e87020013cd3fb1",
      "gender": 2,
      "id": 83223,
      "name": "Donnie Keshawarz",
      "order": 12,
      "profile_path": null
    },
    {
      "cast_id": 283,
      "character": "Franklin Yoshida",
      "credit_id": "5e93b5eb54508d001a17813f",
      "gender": 2,
      "id": 1545016,
      "name": "Bobby Nish",
      "order": 13,
      "profile_path": "/fuJyCgr9iZwFT5fEXuf0s4noCRg.jpg"
    },
    {
      "cast_id": 284,
      "character": "Willie Levant",
      "credit_id": "5e93b601d55e4d00151a24ee",
      "gender": 2,
      "id": 62093,
      "name": "Sean Blakemore",
      "order": 14,
      "profile_path": null
    },
    {
      "cast_id": 285,
      "character": "Captain Lu",
      "credit_id": "5e93b6128e87020016ccf1fa",
      "gender": 1,
      "id": 51754,
      "name": "Freda Foh Shen",
      "order": 15,
      "profile_path": null
    },
    {
      "cast_id": 286,
      "character": "Female Flight Attendant",
      "credit_id": "5e93b642ccb15f00156fc88a",
      "gender": 1,
      "id": 1518164,
      "name": "Kayla Adams",
      "order": 16,
      "profile_path": "/7nB3pQYuyC64Mv5XmjllOb0LJlf.jpg"
    },
    {
      "cast_id": 287,
      "character": "Arjun Dhariwal",
      "credit_id": "5e93b65f8e87020013cd406d",
      "gender": 0,
      "id": 1041408,
      "name": "Ravi Kapoor",
      "order": 17,
      "profile_path": null
    },
    {
      "cast_id": 288,
      "character": "Woman in White Pants-Shirt",
      "credit_id": "5e93b6752cde980014c4b306",
      "gender": 0,
      "id": 1754778,
      "name": "Elisa Perry",
      "order": 18,
      "profile_path": "/xAYRz1DHEikObddnCFEKFiQppu3.jpg"
    },
    {
      "cast_id": 289,
      "character": "Sal",
      "credit_id": "5e93b68f875d1a001244dee3",
      "gender": 2,
      "id": 101165,
      "name": "Daniel Sauli",
      "order": 19,
      "profile_path": "/bl3dSCbXTdnKwQpvT3jEKcYUUmh.jpg"
    },
    {
      "cast_id": 290,
      "character": "Sergeant Romano",
      "credit_id": "5e93b69c84448e001a90f195",
      "gender": 1,
      "id": 1497921,
      "name": "Kimmy Shields",
      "order": 20,
      "profile_path": "/gXYQ7h22Q0FCx9T2XZDbXWm7gQQ.jpg"
    },
    {
      "cast_id": 291,
      "character": "Technician One",
      "credit_id": "5e93b6ab875d1a001444b963",
      "gender": 2,
      "id": 2422160,
      "name": "Kunal Dudheker",
      "order": 21,
      "profile_path": "/uwRGVuRsAUYfb0dMKnQC6GrlxtP.jpg"
    },
    {
      "cast_id": 292,
      "character": "Janice Collins",
      "credit_id": "5e93b6fad55e4d00131a3a56",
      "gender": 1,
      "id": 19262,
      "name": "Alyson Reed",
      "order": 22,
      "profile_path": null
    },
    {
      "cast_id": 293,
      "character": "Female Team Member",
      "credit_id": "5e93b70a2cde980014c4b544",
      "gender": 0,
      "id": 1350927,
      "name": "Sasha Compère",
      "order": 23,
      "profile_path": null
    },
    {
      "cast_id": 294,
      "character": "Male Team Member",
      "credit_id": "5e93b715875d1a001444ba35",
      "gender": 0,
      "id": 1446014,
      "name": "Justin Dray",
      "order": 24,
      "profile_path": null
    },
    {
      "cast_id": 295,
      "character": "Woman on Screen",
      "credit_id": "5e93b780875d1a001444bb69",
      "gender": 1,
      "id": 2422163,
      "name": "Alexandria Rousset",
      "order": 25,
      "profile_path": "/f2sirEuqhAvV6FT5LUb3mqJHW6T.jpg"
    },
    {
      "cast_id": 296,
      "character": "Tanya Pincus",
      "credit_id": "5e93b7b6d55e4d00151a293b",
      "gender": 1,
      "id": 10871,
      "name": "Natasha Lyonne",
      "order": 26,
      "profile_path": "/Ao3Tao5nCrJGvNiFyFrzZs0Iyzg.jpg"
    },
    {
      "cast_id": 297,
      "character": "Spacecom Employee",
      "credit_id": "5e93b7c6ccb15f061c6f181a",
      "gender": 0,
      "id": 2422164,
      "name": "Zoro Saro Manuel Daghlian",
      "order": 27,
      "profile_path": null
    },
    {
      "cast_id": 298,
      "character": "Young Roy",
      "credit_id": "5e93b7d52cde980014c4b797",
      "gender": 2,
      "id": 2422165,
      "name": "Jacob Sandler",
      "order": 28,
      "profile_path": "/zlayN5U2MyE2li7goSTvX9iKnjw.jpg"
    },
    {
      "cast_id": 299,
      "character": "Cepheus (voice)",
      "credit_id": "5e93b7e3ccb15f00136ff3e8",
      "gender": 1,
      "id": 1662346,
      "name": "Elizabeth Willaman",
      "order": 29,
      "profile_path": null
    }
];
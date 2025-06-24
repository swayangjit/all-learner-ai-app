export const getAssetUrl = (filename, type = "mechanics_images") => {
  if (!filename) return false;
  return `${process.env.REACT_APP_AWS_S3_BUCKET_CONTENT_URL}/${type}/${filename}`;
};

export const getAssetAudioUrl = (filename, type = "mechanics_audios") => {
  if (!filename) return false;
  return `${process.env.REACT_APP_AWS_S3_BUCKET_CONTENT_URL}/${type}/${filename}`;
};

export const Apple = `70d97e24-abf4-42af-8aa7-779801541372.png`;
export const apAudio = "a1117f70-6dc0-4210-b794-b7d55abfa5c3.mp3";
export const pleAudio = "1b041226-090c-4e4b-bfe4-e9b432e6001a.mp3";
export const appleAudio = "b2a39def-9a1e-4ec3-9793-03d79e3d3d52.mp3";

export const happyImg = "408257c8-af6e-4718-a8a5-be070a195d1e.png";
export const hapAudio = "3503a6ac-800d-4477-85ee-146e6642bcb1.mp3";
export const pyAudio = "d71e9bec-a8aa-4e35-83f0-44bd8a3549bd.mp3";
export const happyAudio = "5992042b-9bf0-4feb-a0e3-b6eb80100c32.mp3";

export const pencilImg = "dfa309a9-713b-4726-b822-d0423c033175.png";
//export const penAudio = "3dc789a8-2cbe-4a92-83f1-b41da07ba70e.mp3";
export const cilAudio = "3de1d37d-8b6a-436a-b36f-5843fd6f87c7.mp3";
export const pencilAudio = "1f5163a9-bd4a-4f7b-8625-22c636c6b300.mp3";

export const TigerNewImg = "c6513466-596d-4a47-abff-0c8202c0dc5d.png";
export const tiAudio = "1b38868a-ce4b-491e-b9c6-56a95046db50.mp3";
export const gerAudio = "4e877701-5226-412f-a7b6-382af4e8632b.mp3";
export const tigerAudio = "5f5c440d-f421-4ae5-bc28-d4fb98ad7578.mp3";

export const RocketNewImg = "80b22d32-621f-4f16-b1a2-f428b35c05ef.png";
export const Rock = "73ef03fc-61d5-479d-8ca0-450492a145f0.mp3";
export const Et = "f7053bb9-285f-476c-a525-f0f41869fd49.mp3";
export const RocketS = "dfff31f2-ac9c-4346-a9f7-7042e82d8888.mp3";

export const Basket = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
export const Bas = "631cf215-4282-4e62-b116-85cd92d6201e.mp3";
//export const Ket = "e095247f-d16a-40bc-8c86-dc9da7a7cdf6.mp3";
export const BasketS = "75ace319-2bdf-4ef2-8bfe-8f99dbc540aa.mp3";

export const DinnerNewImg = "d8ae7f85-9262-434b-a813-5dd07780f7f0.png";
export const dinAudio = "2125b9e8-43b1-42b6-89ea-1c31bc226e5b.mp3";
export const nerAudio = "81c7662b-d041-4e3b-82bc-9ce92d203c86.mp3";
export const dinnerAudio = "c15c8f2b-6d25-4731-a9df-02c2b8a76bb7.mp3";

export const WindowNewImg = "2fc1a46c-7a7b-44de-8f2d-da5a69b6793d.png";
export const winAudio = "8dd8755b-a98c-4d9a-862b-b2663e128fcd.mp3";
export const dowAudio = "722fed44-3add-453e-a8eb-9fa0c1fb8359.mp3";
export const windowAudio = "f9d1fda0-c246-469e-9ea7-c84b646acc98.mp3";

export const MagnetNewImg = "0b2fed44-a12c-4aef-86bb-71aaa9beafb0.png";
export const magAudio = "c265a218-6ba9-427e-b8b5-021d96cf34c5.mp3";
export const netAudio = "680920d5-9f10-4e5c-94b4-892eb8a73639.mp3";
export const magnetAudio = "220a198a-a138-4f29-ac35-382bb58e40df.mp3";

export const TennisNewImg = "171b7425-6f7a-4fe8-8e5c-44f1d6704734.png";
export const tenAudio = "fc2b08a8-d61f-4a23-9ebf-2bf7ca50090e.mp3";
export const nisAudio = "c01a51af-3a03-49ef-94ac-ebd5c4815fd5.mp3";
export const tennisAudio = "2af8a1d3-f69f-4828-9c0c-5d7897892df8.mp3";

export const PictureNewImg = "53373c82-fc09-4fd7-8a86-de9c521697ca.png";
export const picAudio = "88eea860-1980-4cfc-95d4-14b8e97552ff.mp3";
export const tureAudio = "e08d2e91-70b9-41d8-9b2e-ae316cbd41b7.mp3";
export const pictureAudio = "4c34b55a-d1c0-4818-8a05-7d4fbe39cfef.mp3";

export const NumberNewImg = "2dbd9b96-1daa-4a3a-9027-6ff32f81378a.png";
export const numAudio = "30ffa191-c39b-4b35-ad52-cfe1bf970d67.mp3";
export const berAudio = "827d17b0-9c20-459f-b6a3-0d4ab2bc7263.mp3";
export const numberAudio = "6ef92525-dc5e-40ae-8c44-1f84ae72f3d8.mp3";

export const DoctorNewImg = "e03c3dbf-a6a2-4b0c-a5ca-6583c2b22af0.png";
export const docAudio = "636e1eb0-8781-458e-924c-92229352a886.mp3";
export const torAudio = "18c8ed24-82fa-4513-a106-65f19e126b19.mp3";
export const doctorAudio = "5337f05e-d4dc-430d-94ba-b05d15c1c670.mp3";

export const questionPaperImg = "2f34a23b-f983-40ea-8453-76c4e822d85d.png";
export const paAudio = "b4052806-689c-4682-a3c7-ec33949dc248.mp3";
export const perAudio = "b1e57519-8bb2-4e73-a63c-8fd2149376cd.mp3";
export const paperAudio = "b6abcdef-ed3d-4b65-aff8-a0ad1c156df2.mp3";

export const MonkeyNewImg = "54b34af6-ae55-4f37-9b19-fe58723f443f.png";
export const monAudio = "5992d808-23f1-46c2-a4e8-d143cd5ef452.mp3";
export const keyAudio = "163bc77c-5e44-41d7-aa29-548b21b50ab7.mp3";
export const monkeyAudio = "a3ec9f08-d445-417c-baf8-e239df5a271a.mp3";

export const gardenImg = "07c44745-e9e3-4264-9645-3da09b4d66c8.png";
export const garAudio = "ef6ad6aa-55bb-48ae-9997-c3dfe5563988.mp3";
export const denAudio = "7c24cc2d-ef4b-4598-b107-a2a2865cf196.mp3";
export const GardenAudio = "7c83b6e5-d40b-4144-b8e6-5524d31eedb3.mp3";

export const helmetImg = "5a0e821b-b8b4-45b0-980b-bf1b06e9b918.png";
export const helAudio = "95adff22-d860-4b79-851b-955a5b102065.mp3";
export const metAudio = "7d473604-5ac6-4160-8105-78d60a1b4f1b.mp3";
export const helmetAudio = "daafd516-a70a-43da-b150-db1754f0c9c9.mp3";

export const catImage = "1d6ac0b0-7c78-44fa-a577-1fa2eef31352.png";
export const Kit = "21960c5b-f3ca-410c-9c5f-475c24a64be2.mp3";
export const Ten = "ddae48b2-83a1-427e-bfd3-24a0b4953515.mp3";
export const KittenS = "7babb0dc-cca7-4e99-981f-4dc76b970a32.mp3";

export const Jacket = "b6053ca3-e946-4cba-bd2c-0dce36bbdc75.png";
export const Jack = "a2e3c1d1-c223-4e7c-8f86-c52eafe543c0.mp3";

export const JacketS = "99523c92-f5ef-47f6-9c3a-b284ae72ca0c.mp3";

export const pocketImage = "000cab4b-8140-4c59-99f1-520a136c8ed3.png";
export const Pock = "c6a097f4-03c4-40cc-913c-5406b6547fe6.mp3";

export const PocketS = "ef4ab51d-57cf-48bf-8790-b6deeb35a0b5.mp3";

export const boyChildImg = "3c2b2fce-5cb8-4f74-977b-00e25e05a629.png";
export const child = "31665b4f-973c-4fee-b86f-5e86ab4c6f33.png";

//M14P1
export const boyChild2Img = "6c6299e1-c120-4ddb-8032-2fc2c422b5fa.png";
export const level14P1OneUAudio = "4b92fe54-0fac-4605-899b-ef95de4f743c.mp3";
export const level14P1TwoUAudio = "b402b5d6-b3b9-4030-b9a8-1324f89d89c9.mp3";
export const level14P1ThreeUAudio = "814ba431-7f4f-4dae-b2c9-5c7beaa65838.mp3";
export const level14P1FourUAudio = "2b479267-f343-46c8-a7f6-7ade819e6b78.mp3";
export const level14P1FiveUAudio = "b3a95fe5-2e18-454f-8884-950a00d1b7f8.mp3";

export const humanImg = "5f0c40da-3004-45ee-af93-f54a90e30836.png";

//M14P2
export const collegeGirlImg = "4a0ce73d-c68c-4713-9eb7-75571b274f42.png";
export const level14P2OneUAudio = "b448a3d9-2eaf-498f-8f3a-0b16f18c22fa.mp3";
export const level14P2TwoUAudio = "acc859d6-3545-4e7a-a994-c35f82cfe4ff.mp3";
export const level14P2ThreeUAudio = "c2a62648-9b6f-4d18-bf01-6b54b6333db2.mp3";
export const level14P2FourUAudio = "4f83eacb-ba8b-4bcf-824c-63d3606d73e5.mp3";
export const level14P2FiveUAudio = "d6b91e82-fd9a-4faf-91e5-f7ca2cb725fd.mp3";
export const level14P2SixUAudio = "be39f831-3afe-4ed0-a6e2-b06bcf44c896.mp3";

export const salesPerson = "538bd172-fe70-4c2b-96a3-cda220afd1d7.png";

//M14P3
export const femaleAstronautImg = "29a6bb4e-7a2b-42c4-8652-ff24c488344a.png";
export const level14P3OneUAudio = "5d122827-0702-4d9a-b95f-73dd7e12be3f.mp3";
export const level14P3TwoUAudio = "74824db4-fec1-4223-87e2-a4b8c6067de3.mp3";
export const level14P3ThreeUAudio = "eb1ecef2-b433-4174-9818-76c5ca66d7cb.mp3";
export const level14P3FourUAudio = "3c932484-d77f-4c5a-97a2-70a1669d3929.mp3";
export const level14P3FiveUAudio = "0de7362f-551e-47eb-8b06-6bb32b6905c6.mp3";

export const vegVendor = "2867a995-7791-4c4b-a0a1-08af143503c9.png";

//M14P4
export const cricketBoyImg = "1737c544-0caa-4cc0-97b7-f6065f5e1dc6.png";
export const hockeyGirlImg = "a747d5bd-14ac-4e96-8d0f-214368951f21.png";
export const level14P4OneUAudio = "f9ddb5b2-5ae4-4b03-8691-e9d8f8507c3c.mp3";
export const level14P4TwoUAudio = "8238b827-7d5b-42e9-a0f1-e861d98f56ef.mp3";
export const level14P4ThreeUAudio = "b7602954-9099-479b-a171-060812df8e65.mp3";
export const level14P4FourUAudio = "0c8cc342-e02a-4821-8450-b844ebeb830f.mp3";
export const level14P4FiveUAudio = "681afebe-1ea2-4c9e-96af-8210d12c4fe4.mp3";

//M14S1
export const level14S1OneUAudio = "6085a733-52b8-44d1-82e3-a4433e44ff67.mp3";
export const level14S1TwoUAudio = "48929c5c-3dfc-4cce-9d52-204688535241.mp3";
export const level14S1ThreeUAudio = "849f006a-68f9-4204-8435-c2112514d9fa.mp3";
export const level14S1FourUAudio = "3a0cf6e6-47b3-4742-a787-244eff6bb46f.mp3";
export const level14S1FiveUAudio = "c2104ea8-dd8b-483b-918b-6a3ae584bfaa.mp3";

//M14P5
export const girlSprinterImg = "75c3f0a3-21ab-472c-b3f3-527231b3cc60.png";
export const level14P5OneUAudio = "d4b4b169-fc07-4008-9ae8-c7c2e8850a28.mp3";
export const level14P5TwoUAudio = "f773eb8c-c5f8-4866-8104-661aa3955bbe.mp3";
export const level14P5ThreeUAudio = "57f47fd0-94df-497e-a6af-8f5a7c348912.mp3";
export const level14P5FourUAudio = "04dc7d70-bc81-4f07-93bf-13ae0dcc2260.mp3";
export const level14P5FiveUAudio = "d26c8e8f-4824-49f0-b4c6-c955ac3b702f.mp3";

//M14P6
export const deliverymanImg = "e85a773f-8660-48b2-bcc9-6040d5d68a35.png";
export const level14P6OneUAudio = "59a254ca-cd6a-4af6-b9c6-640f0e113f75.mp3";
export const level14P6TwoUAudio = "9c574348-28c1-44b4-8ebd-c3877534d939.mp3";
// export const level14P6TwoUAudio_Alt =
//   "9cb94dc9-068d-4cbf-bc5d-a63f778a4c59.mp3";
export const level14P6ThreeUAudio = "85e92f8f-7cc5-4b71-aa2c-13e6a15b4556.mp3";
export const level14P6FourUAudio = "d2e88b0c-ba44-4dda-a5c8-0989a2bef948.mp3";
export const level14P6FiveUAudio = "7362c409-a07d-4464-8cb5-c2920c50629a.mp3";

export const mother = "ce29c00b-3912-4a12-83db-e0b5e4f081bb.png";

//M14P7
export const femaleTrekkerImg = "cf22896d-5553-49bb-a133-9c42bb30e945.png";
export const level14P7OneUAudio = "62f05f8d-f9fe-4e7a-8490-347f66093b6a.mp3";
export const level14P7TwoUAudio = "74fdd661-cf45-4b88-96a8-e96c776a06b0.mp3";
export const level14P7ThreeUAudio = "dab71c29-440b-4199-8a09-bc3fe8cbd008.mp3";
export const level14P7FourUAudio = "12a9d804-adc1-4fd5-b8a5-fc4ce4975118.mp3";
export const level14P7FiveUAudio = "f68f64cc-c660-4ee9-863a-533ea5cc5b2a.mp3";

//M14P8
export const ladyImg = "bd7cc11b-d639-4ee2-84b1-134eb0faa15e.png";
export const level14P8OneUAudio = "3d69d874-8153-4b27-a985-e3cc4586a614.mp3";
export const level14P8TwoUAudio = "2dfae373-b2b8-4c1a-8502-434bc6b3e021.mp3";
export const level14P8ThreeUAudio = "59616595-1fba-43ea-bf76-d1c0c534c110.mp3";
export const level14P8FourUAudio = "2859339f-961e-412c-8fdb-10de225f7ee7.mp3";
export const level14P8FiveUAudio = "6d4fe195-3b88-4dd9-9996-f846049270ad.mp3";

//M14S2
export const level14S2OneUAudio = "6b0cb945-540b-4b99-a502-d8a1551c7bab.mp3";
export const level14S2TwoUAudio = "c2b3d76d-4236-4b1c-8612-11783ffd047e.mp3";
export const level14S2ThreeUAudio = "eaeec126-e83f-4469-98ab-28b9b065cd53.mp3";
export const level14S2FourUAudio = "047752bc-c698-4918-ba5f-28441ca0e13c.mp3";
export const level14S2FiveUAudio = "cb117a2a-a50d-48e5-8a4e-8abdda654065.mp3";

//M12P2
export const level12P2CAudio = "49172a64-0c2e-4d1f-a080-2b087ae32e97.mp3";
export const level12P2Audio_1 = "80b01268-fbc8-476d-9414-78f3db57549c.mp3";
export const level12P2Audio_2 = "80b01268-fbc8-476d-9414-78f3db5753666.mp3";
export const level12P2Audio_3 = "70d683e8-13d7-4396-9a5a-bf9cb9ad3e87.mp3";
export const level12P2Audio_4 = "70d683e8-13d7-4396-9a5a-bf9cb9a53666.mp3";
export const level12P2Audio_5 = "2ede71ff-31af-408f-aa4b-2cacdf880c49.mp3";
export const level12P2Audio_6 = "2ede71ff-31af-408f-aa4b-2cacdf853666.mp3";
export const level12P2Audio_7 = "dd6a7da4-d2a0-4cbc-91b6-4d5f781efc2e.mp3";
export const level12P2Audio_8 = "dd6a7da4-d2a0-4cbc-91b6-4d5f78153666.mp3";
export const level12P2Audio_9 = "d832573d-039e-4276-8e59-19573da4bffc.mp3";

//M12P6
export const level12P6CAudio = "2411de31-c7c0-42b3-9c75-decc0b77942a.mp3";
export const level12P6Audio_1 = "0b1b818e-1bb0-431c-b2f8-30757a4a4990.mp3";
export const level12P6Audio_2 = "0b1b818e-1bb0-431c-b2f8-30757a453666.mp3";
export const level12P6Audio_3 = "f7fb3297-a728-4ee4-8dd9-5dff53011b9c.mp3";
export const level12P6Audio_4 = "f7fb3297-a728-4ee4-8dd9-5dff53053666.mp3";
export const level12P6Audio_5 = "6ca92367-517a-47da-ac94-e8a3d6d5c032.mp3";
export const level12P6Audio_6 = "6ca92367-517a-47da-ac94-e8a3d6d53666.mp3";
export const level12P6Audio_7 = "d01242b1-9972-4c71-a941-8d631e08b180.mp3";
export const level12P6Audio_8 = "d01242b1-9972-4c71-a941-8d631e053666.mp3";
export const level12P6Audio_9 = "b9367264-8b13-4b08-8009-b26c26ee699b.mp3";
export const level12P6Audio_10 = "b9367264-8b13-4b08-8009-b26c26e53666.mp3";
export const level12P6Audio_11 = "5749c8d3-b3fc-49f5-b4d1-221ec4cffd0b.mp3";
export const level12P6Audio_12 = "5749c8d3-b3fc-49f5-b4d1-221ec4c53666.mp3";

//M12P7
export const level12P7OneAudio = "3b98838c-38f6-4354-9e88-c546c937ba81.mp3";
export const level12P7TwoAudio = "ff789f18-6696-44ee-8c14-9134f311b413.mp3";
export const level12P7ThreeAudio = "f9c80c02-9419-4890-97ba-e6ddcc455545.mp3";
export const level12P7FourAudio = "f670d9ae-0862-48a2-8987-6c1fcaebaa73.mp3";
export const level12P7FiveAudio = "fbc1b7d7-ae6a-49d4-b739-1b7f1ce1893f.mp3";

//M12P5
export const KasturbaRoad2Audio = "6cc1f0ba-d045-41dd-a300-5d9e3b7213f2.mp3";

//M12S1
export const TaraPlanetariumAudio = "ea114221-b6ff-483f-8b1d-d557489a5671.mp3";
export const PlanetariumImg = "ae59f62b-8699-4567-9f0c-4c70e2233153.png";
export const ChildrensParkImg = "263a1f6e-423a-472e-8e22-795f4dddcc82.png";

//M12P8
export const level12P8OneAudio = "4765b6c4-acce-45de-aec7-cb2ab8fa85ee.mp3";
export const level12P8TwoAudio = "a8295893-3f72-4fb5-b158-6e61a25255c7.mp3";
export const level12P8ThreeAudio = "c9a2a147-4159-4abe-bc7b-a022e4f282b1.mp3";
export const level12P8FourAudio = "0d7a344c-1517-47c4-bdba-18f1423b314f.mp3";
export const level12P8FiveAudio = "65f772bc-21d2-4900-a0c8-8693b9b2952f.mp3";

export const museumDirectionsAudio = "db8b8cb5-1cea-47d4-979c-fa9337e8f3d4.mp3";

//M12P4
export const level12P4OneAudio = "5db5b3c1-edb0-4a6e-9d08-60a2f5d9abb1.mp3";
export const level12P4TwoAudio = "54c37bcd-410d-410b-8dd4-42100d4330af.mp3";
export const level12P4ThreeAudio = "7bc37c68-0890-405d-b2e1-9c917fb44c9e.mp3";
export const level12P4FourAudio = "6146038e-12e1-4cef-b2bb-6e2c2d4f0b9b.mp3";
export const level12P4FiveAudio = "57df3360-ec72-48ff-8e31-b934f7dc809d.mp3";

//M12P3
export const level12P3OneAudio = "12cd2388-bf5f-4797-9c6e-2e51a314496c.mp3";
export const level12P3TwoAudio = "27996cf1-a950-420a-8c67-d9d431e07a50.mp3";
export const level12P3ThreeAudio = "b78d91b2-6aab-4318-a989-3d9024f3b8d4.mp3";
export const level12P3FourAudio = "b7a99530-f426-46f0-8b2d-75bc33dc83e5.mp3";
export const level12P3FiveAudio = "0f18475a-9f25-40ed-962a-d04f976e6010.mp3";

//M12P1
export const level12P1Audio = "0cd5fe8a-cdb5-42b5-9b35-bc3d2f0fd95c.mp3";
export const banyanTreeImg = "d3e5fe1a-c861-4114-9074-c7c3eed8c9f9.png";
export const mall2Img = "faede074-1b0d-4e09-9b24-fbd507578d4e.png";

export const catintroductionAnouncementImg =
  "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";

//M11S2
export const cat2Image = "794f7713-738e-4ec9-9b34-33f0839030ea.png";
export const level11S2Audio = "6f6c0b8f-6916-45bf-bd0d-fc2f8a45b28d.mp3";

export const bf1 = "f91076fd-b3db-4544-8e38-f22664af2a21.png";
export const bf2 = "301f2216-5fa2-4865-bd97-bd9a348c914b.png";

//M11P7
export const manImg = "d92a1ef9-22de-4882-85ac-2ef15069fcd8.png";
export const level11P7OneUAudio = "1f1c2bc7-8018-4e85-8e5d-1c9b640e0145.mp3";
export const level11P7TwoUAudio = "2578fe65-d156-4f8b-9d75-323041210939.mp3";
export const level11P7ThreeUAudio = "16187fbd-3e9e-4d93-b5c4-967819b28d39.mp3";
export const level11P7FourUAudio = "d3e2677c-94c0-44dc-adcf-0ffe2d098c4d.mp3";
export const level11P7FiveUAudio = "1ee35b9a-1ddc-46c7-a27f-50e5ef424957.mp3";

//M11P8
export const level11P8OneUAudio = "0ae8a8db-5713-4fc1-a6ab-ae50b9caabf7.mp3";
export const level11P8TwoUAudio = "1318a887-58de-4ca7-9280-288fb1865dbe.mp3";
export const level11P8ThreeUAudio = "45eda6f6-870a-4267-8a0c-4b2e0347ea2c.mp3";
export const level11P8FourUAudio = "af8e1fe6-872d-4413-9b48-1455fd961a6c.mp3";
export const level11P8FiveUAudio = "9209715e-6773-4f7f-b114-e6e572b9a9b2.mp3";

//M11P6
export const level11P6Audio = "78451122-778a-477b-b4ca-e46c2e6e6ba0.mp3";

//M11P5
export const level11P5Audio = "1054371e-0c7c-4428-baec-6069d45d2dd6.mp3";

//M11S1
export const level11S1Audio = "c3c5aa85-8bcc-450d-b144-74840e0a9d35.mp3";
export const familyFoodImg = "787509c3-7041-4d11-9a4a-1ab34daad2b6.png";
export const FamilyTVImg = "69888c40-7a56-4e57-8a8c-f52e9df36dcf.png";

//M11P4
export const kidImg = "70ee843b-f8ef-4111-b7ce-d9740bdba1d4.png";
export const motherImg = "21841d42-903b-45bb-8a1f-73c4edc7fef2.png";
export const level11P4OneUAudio = "d4dd4083-7999-412b-a082-424bdf1b67bb.mp3";
export const level11P4TwoUAudio = "5a9a3ed5-ee20-4cbf-9258-41118244130d.mp3";
export const level11P4ThreeUAudio = "90831f50-d2c5-4f24-8c8f-00d22c4858b4.mp3";
export const level11P4FourUAudio = "16edee35-2c3e-4271-bcd8-8ac374edc023.mp3";
export const level11P4FiveUAudio = "76b40c3c-e6b0-4f0b-b371-4b00d16e8439.mp3";

//M11P3
export const thingirlImg = "10758df5-f2c6-47a8-84e6-3fccc286a634.png";
export const level11P3OneUAudio = "1865466a-b9ab-459a-908d-572a0c6ee092.mp3";
export const level11P3TwoUAudio = "16a56179-b078-4dc0-868b-3b76fdcb5679.mp3";
export const level11P3ThreeUAudio = "be333493-aa89-437d-b383-2424bcb2788a.mp3";
export const level11P3FourUAudio = "da684b6c-9a8f-4657-9469-71bceebafce3.mp3";
export const level11P3FiveUAudio = "1c421cc7-b418-44cb-ae47-0e4893a2a86b.mp3";

export const rahulOne = "4eb990fc-c4b8-4920-9c05-cb14c7cf795e.png";
export const rahulTwo = "ed2894a3-3730-4015-a4fa-85133fc6bd9d.png";
export const friendintroductionAnouncementImg =
  "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";

//M11P2
export const level11P2Audio = "64c131a2-49f4-42b6-b826-691aac36e945.mp3";
export const boyfootballImg = "081a30ba-8a35-4836-9a23-cf003e1baf7f.png";
export const govschoolImg = "e75d2b0e-9f55-45c6-a78b-1787ee42a5a8.png";

export const dosaIce1 = "cab22300-541a-41a4-b7f9-bac30e6e455c.png";
export const dosaIce2 = "0d9f19e5-76cc-48df-b9a6-327b57053235.png";
export const SouthIndianAnouncementImg =
  "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";

//M11P1
export const level11P1Audio = "1cc91c8a-4ed5-47bf-be30-a0a79b1b955e.mp3";
export const girlcycleImg = "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";
export const girlTVImg = "b2c05e4f-9691-42f2-9fb6-106bd7b7c38d.png";

//M10P1
export const trainImgOne = "e68daca6-3dab-4323-b25c-fac63a5d4158.png";
export const trainImgTwo = "d3a6dd32-3b4f-4f13-a215-e72561f6eb4f.png";
export const railAnnouncementImg = "93bc06c4-06d4-44a3-be8f-e62a61444013.png";
export const bengaluruTrainAudio = "81b67384-f0cf-4237-8b3a-d57f3c3c56bd.mp3";

export const imageOne = "2afe10e0-4d94-490d-8242-19897849054f.png";
export const imageTwo = "71bd9c0e-e792-48b7-8b4c-1280939f88dc.png";

export const chennaiTrainAudio = "3d9f5fc7-1f93-4d9a-94c5-e2ede630447b.mp3";

//M10P2
export const childrenDayImg = "663df2b5-ba16-457d-9caf-eacaaf768100.png";

//M10P3
export const level10P3OneAudio1 = "33e14330-f0e6-4566-b095-ccb7e67e80ba.mp3";
export const level10P3OneAudio2 = "055bf8a4-ca6b-4d40-8f5a-df23408ddfd5.mp3";
export const level10P3OneAudio3 = "48a7ca99-a2d3-4f8a-8d22-45c77acebe2c.mp3";
export const level10P3TwoAudio1 = "4887f130-5f77-48e9-8fa6-329d5c2c87d6.mp3";
export const level10P3TwoAudio2 = "8f5a1a9a-2d3e-435d-af86-0459902a31bf.mp3";
export const level10P3TwoAudio3 = "f28c9aaf-4666-498c-b7ef-7d310002baa3.mp3";
export const level10P3ThreeAudio1 = "37a15644-33d1-4329-b914-ea3a7bbca10f.mp3";
export const level10P3ThreeAudio2 = "dd0d736c-7e39-48ba-a01b-bbd62754eff5.mp3";
export const level10P3ThreeAudio3 = "b54767f3-4455-4a52-94c7-d1c149bf4d1b.mp3";
export const level10P3FourAudio1 = "f686f4e8-da12-4eb9-a7d4-44c05c9e2498.mp3";
export const level10P3FourAudio2 = "71794dd8-c6a4-4c4b-916d-08dead39262d.mp3";
export const level10P3FourAudio3 = "b3fbe2f7-7ac2-41b5-b224-4b26d462d0d5.mp3";
export const level10P3FiveAudio1 = "1ed00c8c-8d17-40de-a649-5c6a1b54ee36.mp3";
export const level10P3FiveAudio2 = "8cb4d71b-27f8-41ba-922c-a6dcbb77cf45.mp3";
export const level10P3FiveAudio3 = "07149bfb-6128-41a1-8794-75ec33d5302d.mp3";

export const imageOneP4 = "f0471f58-d94a-48df-90a2-831b780e5914.png";
export const imageTwoP4 = "d3a6dd32-3b4f-4f13-a215-e72561f6eb4f.png";
export const imageThree = "481e761a-2254-4b7d-967a-36d0484aa2b6.png";

//M10P4
export const toyTrainAudio = "df76ae56-08dc-4ed0-b153-6cd648fe68cb.mp3";

//M10S1
export const villageAnnouncementAudio =
  "9ad6a141-654c-4ae2-b8c8-ace18d101d86.mp3";
export const villageDramaImg = "f959324f-8f80-40af-824e-30e6a8993514.png";
export const AnnouncementLadyImg = "689a4db7-1b40-4dc5-85a2-199e6da6a2aa.png";
export const childrenImg = "f4fcaa9e-5f08-43d5-8f47-967414faa05d.png";

export const biharAnouncementImg = "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";
export const patna1 = "298866f6-9ece-49cb-a49c-ce7a8ebac06b.png";
export const patna2 = "c79c4d26-816e-40f2-8c8d-4202385a8687.png";

//M10P5
export const TvBreakingNewsImg = "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";
export const HeavyRainImg = "0c5f0143-c9a3-49f6-8db7-723646dfe300.png";
export const RainAudio = "2d1586f1-d0de-4f0b-bf34-9a360479f895.mp3";

export const reporter1 = "61a59cfe-aeb7-4c55-93d0-66001fe1f46b.png";
export const reporter2 = "94ec9353-5fe5-4d8d-b449-053dbe98d224.png";
export const cycloneAnouncementImg = "b0f1311b-c168-4b5b-8664-c2c9d10e96fe.png";

//M10P6
export const goodtouchImg = "432b5896-b145-45af-b141-1bae1ca5ded8.png";

//M10P7
export const level10P7OneAudio1 = "ac94a4cf-fc60-4c19-96d0-3cf0443e18ed.mp3";
export const level10P7OneAudio2 = "d97a021f-08f6-4806-b70f-1dceb784774b.mp3";
export const level10P7OneAudio3 = "3658c347-86e9-4ede-92ef-49af8f211e29.mp3";
export const level10P7TwoAudio1 = "929348bd-182a-4383-a75a-c3789db8507a.mp3";
export const level10P7TwoAudio2 = "eecbc1b4-39ff-4a84-8531-025d221e1e5a.mp3";
export const level10P7TwoAudio3 = "c934b977-15b3-4f35-9eff-d409c9e44684.mp3";
export const level10P7ThreeAudio1 = "d92bcd1d-6d30-4aa7-9042-5c242ceda338.mp3";
export const level10P7ThreeAudio2 = "032ab550-2036-436c-9809-cb8289e30cb5.mp3";
export const level10P7ThreeAudio3 = "f6d41fb0-d035-462b-831b-9bc82d807355.mp3";
export const level10P7FourAudio1 = "3cbd31f8-98af-402f-84ec-b760f82b50b2.mp3";
export const level10P7FourAudio2 = "7550d98b-ccd3-40fb-b99c-7850119527ec.mp3";
export const level10P7FourAudio3 = "af0d3a02-2332-4806-be13-3eb770564a23.mp3";
export const level10P7FiveAudio1 = "6db18957-a13f-4184-b350-196606d0eae9.mp3";
export const level10P7FiveAudio2 = "e27e24af-fe34-4aab-a594-06dab289495e.mp3";
export const level10P7FiveAudio3 = "16c1e433-46a9-475c-bbd8-a20565acb076.mp3";

//M10P8
export const hockeyImg = "533d2350-7cd2-49be-9241-4502fe8a988e.png";
export const TwogirlsImg = "be19f6b8-c79f-4312-ac91-df479ab0a1a1.png";
export const hockeyAnnouncementAudio =
  "fe4568bb-ea3b-4f4d-9bfd-4acd68ff7286.mp3";

//M10S2
export const level10S2Announcement = "b71f536a-08c8-4d51-b0ab-fa3d94409c6e.mp3";
export const telephoneImg = "44abe8ec-3789-47ce-84a4-5e57c47c9309.png";
export const womanphoneImg = "3335b5e3-81ef-4ad4-91b6-c58c7aec7a25.png";
export const childphoneImg = "752b2dc7-5a11-46d7-bcc8-04d90b7ee50a.png";

export const level10P7ThreeAudio1_2 =
  "75836134-9e85-4587-a6b8-34a1d84c75e8.mp3";
export const level10P7ThreeAudio3_2 =
  "45c73e28-34e0-45fc-aebf-cbb598a15a70.mp3";
export const level10P7FourAudio2_3 = "8e4918d2-638a-4e18-b40e-c43d169675ab.mp3";

export const level10P7FourAudio3_3 = "302d005f-b599-40da-a5c4-b19145398c84.mp3";
export const level10P7FiveAudio3_3 = "cf89bbdc-c974-4c1c-963a-e2fe38d1a67d.mp3";
export const level10P7ThreeAudio3_3 =
  "75836134-9e85-4587-a6b8-34a1d84c75e8.mp3";

export const level10P7ThreeAudio1_3 =
  "575ed5bc-cc99-401d-8a1a-306d48a97a3a.mp3";
export const level10P7ThreeAudio3_4 =
  "75836134-9e85-4587-a6b8-34a1d84c75e8.mp3";
export const level10P7FourAudio2_4 = "8e4918d2-638a-4e18-b40e-c43d169675ab.mp3";

export const gymAudio = "0228d1c0-1b62-4ad8-93f1-6934359516e2.mp3";
export const level10P7FourAudio2_5 = "c1a65608-eac8-414d-9401-569feeea0dc9.mp3";
export const level10P7FourAudio3_4 = "b71db360-4ef7-4937-a336-64b69138b50f.mp3";

export const gradenAnouncementImg = "cd29f151-4e2f-4b94-a9ff-f81ef8f69ea2.png";

export const gardenAnouncementAudio =
  "9ea4b3b4-ef3f-4f9e-a00b-4bef7dcb6c6a.mp3";

export const appleImg = "70d97e24-abf4-42af-8aa7-779801541372.png";
export const starRImg = "c7612b61-5569-4653-9ffe-d19ef47efa0a.png";
export const jugR1OneImg = "6ad6f42e-5612-44a7-80da-60bf2bd8ba4c.png";
export const starRAudio = "2330b2d9-4983-43ab-a49d-7cacfde535da.mp3";

export const sunsetImg = "a1861ef2-5584-4d5d-b79b-b7d1ae5082c8.png";
export const basketImg = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
export const spinRImg = "ed5cd7a2-66b1-4421-861d-fb53ed3a392e.png";
export const spinRAudio = "126a8b84-3e24-49ec-94d4-fe2a3699b46c.mp3";

export const skyRImg = "d0194f2e-e620-4c39-b26c-ce37e715c728.png";
export const bagR1TwoImg = "d9bd8675-8e49-43d0-b2c3-cd005e58723c.png";
export const bagR1ThreeImg = "14d4d46b-b269-436c-bf92-1b0655b14dbb.png";
export const skyRAudio = "0ec9f86d-e0fc-4ebe-9d25-56b81820acff.mp3";

export const capR1TwoImg = "e514e897-2dc3-4fce-87e1-0a738349e174.png";
export const treeRImg = "263197ac-0043-4107-b97b-0dd84318bc62.png";
export const capR1ThreeImg = "c30c305b-1451-45e5-9fb5-1b3e0ffbbec2.png";
export const treeRAudio = "1f1492b3-2cb8-44ae-9fcc-3fb3e7103f83.mp3";

export const dragonRImg = "6224d1b7-4b9c-4b15-82f1-0a32853581bc.png";
export const dogR1TwoImg = "cea58cbd-73bc-4b94-a4c8-5904ec10612a.png";
export const dogR1ThreeImg = "6173c4f1-51d2-4e6d-8a7a-35b3d80aaeba.png";
export const dragonRAudio = "de3d2baf-d919-4cea-9390-3ca778c9f62c.mp3";

export const eggR1TwoImg = "cf55fb7a-21f4-4e45-ad34-99f7fb77f2cc.png";
export const oilRImg = "83c24929-462b-4183-981c-dc3dd6446fa3.png";
export const eggR1ThreeImg = "796fb5e5-006f-4a8e-ab3b-697b471d8c1b.png";
export const oilRAudio = "8bf4db27-d13b-4995-ada6-25e62cdacd2c.mp3";

export const streetRImg = "14ba16e2-c0ea-4a7e-a74f-141b35ae8cd2.png";
export const fanR1TwoImg = "c087addb-b437-4a4a-8722-ef3acd311df2.png";
export const fanR1ThreeImg = "";
export const streetRAudio = "0a16bf2a-201d-4f6f-a659-7f8bb25a46cb.mp3";

export const pantherRImg = "0812d2e4-c981-4b60-8b61-61464ca73751.png";
export const hatR1TwoImg = "8932732b-15a7-4ced-adfe-c12da37cccb9.png";
export const hatR1ThreeImg = "e8a8b105-2e74-40c3-a522-2154fc8683d5.png";
export const pantherRAudio = "9ddf2dce-4492-465b-87d6-2997b8369d27.mp3";

export const shopImg = "6c8076bd-456b-4db9-af09-8fa97cf7181c.png";
export const listenRImg = "d1ee80cc-527c-45ea-b681-0a7e48dca89d.png";
export const pillowR1ThreeImg = "8f599207-cb9b-43fc-a5ab-f25e961ee3a7.png";
export const listenRAudio = "8ca34e18-c06f-4986-bddd-8bbfc7a8dd4a.mp3";

export const threeRImg = "53226804-e68a-4f52-97ea-460217c1e166.png";
export const ropeR1OneImg = "36ed39d3-3c97-4059-85d5-290c770df87c.png";
export const ropeR1ThreeImg = "bc63dc09-027a-4054-be26-92cc7b551f5b.png";
export const threeRAudio = "27e57622-4b64-42da-8a85-f337ffe10d10.mp3";

export const drawRImg = "76caa169-ebb1-48fa-a83a-bc71590fb7d8.png";

export const drawRAudio = "ba5bd6d6-d8b2-4b8a-b4ab-13bee94eac9b.mp3";

export const scratchRImg = "b768c75c-1fd0-4bf4-94b1-24265b2e8a89.png";
export const scratchRAudio = "aeee617f-33e3-4209-8687-be9482374697.mp3";

export const treasureRImg = "32a16c24-930e-4b22-8481-cc6cf0234b2b.png";

export const treasureRAudio = "449af00f-c148-44b8-84d3-71b45e45ef2a.mp3";

export const deskRImg = "8a6beea7-a0e5-439b-ade2-842b6b56af12.png";
export const deskRAudio = "f9f0b470-eac2-4ebd-99bf-84fb01b262e6.mp3";

export const fanR1OneImg = "b9eb8dfc-0b28-4e49-8f83-cdc1135a1447.png";
export const shoutRImg = "eb944944-ade7-464c-9566-a0fa4585c731.png";
export const shoutRAudio = "cc908f60-f082-4838-9343-d97db30cad06.mp3";

//export const shopImg = "6c8076bd-456b-4db9-af09-8fa97cf7181c.png";
export const whaleRImg = "cf68be78-d67e-4a5a-a065-85eea356c13f.png";
//export const pillowR1ThreeImg = "8f599207-cb9b-43fc-a5ab-f25e961ee3a7.png";
export const whaleRAudio = "e10e3687-fb63-4989-98d3-f972f29c5064.mp3";

export const aimRImg = "b1eb5874-5de3-4c02-ae37-433c96efa059.png";
//export const ropeR1OneImg = "36ed39d3-3c97-4059-85d5-290c770df87c.png";
//export const ropeR1ThreeImg = "bc63dc09-027a-4054-be26-92cc7b551f5b.png";
export const aimRAudio = "3686760d-c8d1-4c4b-9762-1fb570f073f5.mp3";

export const boatRImg = "4850effe-47a4-40d5-b13e-3524d014972d.png";
//export const bagR1TwoImg = "d9bd8675-8e49-43d0-b2c3-cd005e58723c.png";
//export const bagR1ThreeImg = "14d4d46b-b269-436c-bf92-1b0655b14dbb.png";
export const boatRAudio = "6f4b0e65-dbed-41ad-a676-78b4784d1f20.mp3";

//export const capR1TwoImg = "e514e897-2dc3-4fce-87e1-0a738349e174.png";
export const phoneRImg = "c5ea8394-5db7-42b6-b70a-893c2da58337.png";
//export const capR1ThreeImg = "c30c305b-1451-45e5-9fb5-1b3e0ffbbec2.png";
export const phoneRAudio = "441df672-e8ae-4cd5-bef5-5eaae9c65b3a.mp3";

export const orangeRImg = "0c8d1a4f-c2ec-4b4c-9c13-d3b2a11b9b85.png";
//export const dogR1TwoImg = "cea58cbd-73bc-4b94-a4c8-5904ec10612a.png";
//export const dogR1ThreeImg = "6173c4f1-51d2-4e6d-8a7a-35b3d80aaeba.png";
export const orangeRAudio = "897f476e-10b3-4c05-ae26-52a5572f5479.mp3";

//export const eggR1TwoImg = "cf55fb7a-21f4-4e45-ad34-99f7fb77f2cc.png";
export const clockRImg = "f1436985-91ff-4a5d-b73d-1f01829e7b0e.png";
//export const eggR1ThreeImg = "796fb5e5-006f-4a8e-ab3b-697b471d8c1b.png";
export const clockRAudio = "0741e03e-5d64-44d5-af81-d911b2b4e9c0.mp3";

//export const fanR1OneImg = "b9eb8dfc-0b28-4e49-8f83-cdc1135a1447.png";
export const flowerRImg = "6f6bad72-035f-4f55-8e5d-e9ba7ee725b8.png";
//export const fanR1ThreeImg = "9e79a2d8-5133-4959-94a0-3b200ba1b92a.png";
export const flowerRAudio = "fe29fced-12d9-4e6a-b515-988c392636a3.mp3";

export const glassRImg = "b658a334-9405-489c-aa92-8a3879b9e452.png";
export const glassRAudio = "fadeb164-73fc-4953-a221-4d1d1405ae8d.mp3";

export const plantRImg = "78239c74-fc62-4e1f-b455-910d42313f65.png";
export const plantRAudio = "773719b0-b15e-4ef1-9414-41a15a5c6f65.mp3";

export const sleepRImg = "f2a51f1d-a6a5-4ce7-b759-e04b80b37989.png";
export const sleepRAudio = "4ca30e98-34b8-46dd-8f05-d260bbbff3da.mp3";

export const elephantRImg = "d4a75e05-6487-4b26-b9a7-d52f3123548e.png";
export const elephantRAudio = "2bc57efc-f252-48bc-b38e-cebef695a53b.mp3";

export const muscleRImg = "3341d761-6fd8-4aff-a2b1-8f09dde91f0f.png";
export const muscleRAudio = "054bd0c2-b095-4a34-ba41-3a409ae16394.mp3";

export const fieldRImg = "7577cf1f-b9d7-4d81-89b3-99aa42018a62.png";
export const fieldRAudio = "dd59cd48-04bf-480d-95af-32ad333ca707.mp3";

export const bicycleRImg = "dc8b7110-ac90-4f0a-a1b7-3e638f187479.png";
export const bicycleRAudio = "f2cbf13c-8c8f-44c5-ba99-a9929602c746.mp3";

export const mathsRImg = "efed2710-61bf-4d70-a71f-c673e483d20d.png";
export const mathsRAudio = "650db46c-d24f-45e5-9156-1e9bf1296089.mp3";

export const panRImg = "409081fb-b8ad-49ad-9567-fe460fc533c0.png";
export const panRAudio = "94b2d507-3adf-4e08-b334-579aa68ad795.mp3";
export const dogR1OneAudio = "2566aef0-9adb-40a0-af70-8a08844e227c.mp3";
export const capR1OneAudio = "452e865d-f4e1-4deb-8fb8-5ce6f21af966.mp3";
export const eggR1OneAudio = "4bf35d1b-36cb-4991-a2de-d0dc1e2b09ac.mp3";
export const batRAudio = "5b47db8f-527a-412d-b07e-336521eec5c3.mp3";
export const nestR1OneAudio = "892c5ec9-96f9-4686-9431-0445c83ee5fa.mp3";
export const puzzleRImg = "bc5f2ff9-23e0-4c78-9faf-187475f3e0f2.png";
export const ropeR1OneAudio = "f9fe157c-409c-4b41-860a-8e8489922cb1.mp3";
export const puzzleRAudio = "08a863f3-0014-459d-bd23-9eae2497924a.mp3";
export const lemonRImg = "8dc4f4fb-d8c4-42b1-b67d-7b77279ab1c3.png";
export const vanR1OneAudio = "0d2ce58c-2c4c-43b9-8548-bbdb36698c05.mp3";
export const lemonRAudio = "da93ccda-ec06-44af-8996-0cc6db1afb87.mp3";
export const bellR1OneAudio = "a98957c7-4356-488a-a8a8-df18793160ec.mp3";
export const kingRImg = "77201bae-ad45-4d72-85e7-801a1cd25459.png";
export const kingRAudio = "d9f6f612-5836-4df1-8c9b-7bed79167a70.mp3";
export const ladderRImg = "6bb722d3-3247-4aae-87f7-70c7cb896406.png";
export const maskR1OneAudio = "0dac8950-5b80-4615-a7ed-876b775b467e.mp3";
export const jugR1OneAudio = "8601e893-a55b-4709-acbe-3d3295876aac.mp3";
export const ladderRAudio = "dfc37247-5945-4ee5-a2e9-74f3ff371a85.mp3";
export const drumRImg = "ed6cff75-9f68-4650-b8d8-6cc0ec71f48a.png";
export const goatR1OneAudio = "2b66908b-8703-4384-b79b-9447f0eea3c7.mp3";
export const fanR1OneAudio = "36949692-19c2-49b1-9906-1a117c17c0d1.mp3";
export const drumRAudio = "79996f35-3fef-4f3f-822b-15716f358838.mp3";
export const coffeeRImg = "781044e0-6a89-4b08-acfc-222da83d394a.png";
export const coffeeRAudio = "3c27e9b5-cd13-418d-ac4b-7564744ed92f.mp3";
export const appleR1OneAudio = "d09312d4-4ab1-4845-8d6f-fbd61f83918e.mp3";
export const busRImg = "665edd0d-5d8a-40a7-86d2-ebfad3e80def.png";
export const cardRAudio = "28ed10c2-1b11-4e6a-8d19-3a167dc9c681.mp3";
export const graphRAudio = "b9dcd534-fa1a-4fdc-912a-0dd3aa69132b.mp3";
export const ovenRImg = "c27afb27-799c-441c-b402-6bece3b361d9.png";
export const ovenRAudio = "e3a15d5f-e663-4888-8dce-9b797b4d9c37.mp3";
export const tableRImg = "c087addb-b437-4a4a-8722-ef3acd311df2.png";
export const tableRAudio = "1310fd30-ea87-4cd2-8a88-d4b9dbe690c7.mp3";
//export const basketRImg = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
//export const basketRAudio = "9c2208a4-6c4e-4c62-9439-00d5856fce24.mp3";
export const cardRImg = "df09a81f-a39c-4eb0-b254-4ad8e7765932.png";
export const frogRImg = "20ec0cf5-ea8a-434b-afab-a929fa08690c.png";
export const frogRAudio = "bb789538-f1f4-44cb-b19c-9c36714eefef.mp3";

//export const appleImg = "70d97e24-abf4-42af-8aa7-779801541372.png";
export const dogsBarkImg = "0012d4ce-4413-496e-814f-db47e408f1b5.png";
export const hatR1OneImg = "8a10681a-9205-4cf4-b4c8-1fa505f50f08.png";
export const appleNewAudio = "b2a39def-9a1e-4ec3-9793-03d79e3d3d52.mp3";

//export const sunsetImg = "a1861ef2-5584-4d5d-b79b-b7d1ae5082c8.png";
//export const basketImg = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
export const penImg = "d93c9643-b6b5-4883-a530-f59f23cd0b2c.png";
export const penNewAudio = "a4df3da9-0425-40f6-a43d-90ed9e40cda3.mp3";

export const bagR1OneImg = "af54b135-8f1e-4e9b-9f64-14d35a7f0027.png";
//export const bagR1TwoImg = "d9bd8675-8e49-43d0-b2c3-cd005e58723c.png";
//export const bagR1ThreeImg = "14d4d46b-b269-436c-bf92-1b0655b14dbb.png";
export const bagR1OneAudio = "4214e2f7-27c9-4803-80d4-bc27e205170b.mp3";

//export const capR1TwoImg = "e514e897-2dc3-4fce-87e1-0a738349e174.png";
export const capR1OneImg = "45ee8428-8be6-4f6c-9f2f-e3a3e8d66ebc.png";
//export const capR1ThreeImg = "c30c305b-1451-45e5-9fb5-1b3e0ffbbec2.png";
//export const capR1OneAudio = "f8f050c7-76c5-4e98-919e-b86257259584.mp3";

export const dogR1OneImg = "c5f5e3c0-e5cf-42f6-801a-a93eb1f1a185.png";
//export const dogR1TwoImg = "cea58cbd-73bc-4b94-a4c8-5904ec10612a.png";
//export const dogR1ThreeImg = "6173c4f1-51d2-4e6d-8a7a-35b3d80aaeba.png";
//export const dogR1OneAudio = "d911b611-3541-4586-b2f0-a6793af5d1fe.mp3";

//export const eggR1TwoImg = "cf55fb7a-21f4-4e45-ad34-99f7fb77f2cc.png";
export const eggR1OneImg = "7b05d394-76e8-4583-8abd-c520da39ca2a.png";
//export const eggR1ThreeImg = "796fb5e5-006f-4a8e-ab3b-697b471d8c1b.png";
//export const eggR1OneAudio = "234b41b6-c366-409f-b08d-ed05ca3c26df.mp3";

//export const fanR1OneImg = "b9eb8dfc-0b28-4e49-8f83-cdc1135a1447.png";
//export const fanR1TwoImg = "c087addb-b437-4a4a-8722-ef3acd311df2.png";
//export const fanR1ThreeImg = "9e79a2d8-5133-4959-94a0-3b200ba1b92a.png";
//export const fanR1OneAudio = "64347710-8fa6-420a-95a6-c1e4f47eead9.mp3";

//export const hatR1TwoImg = "8932732b-15a7-4ced-adfe-c12da37cccb9.png";
//export const hatR1ThreeImg = "e8a8b105-2e74-40c3-a522-2154fc8683d5.png";
export const hatR1OneAudio = "a9ca3145-3a81-4a83-ba73-9b60e71cdb5d.mp3";

//export const TigerNewImg = "c6513466-596d-4a47-abff-0c8202c0dc5d.png";

//export const glassRImg = "b658a334-9405-489c-aa92-8a3879b9e452.png";
export const batRImg = "92bc2f24-9977-45ea-99d4-a6af60dc7aab.png";
//export const batRAudio = "3fb1f250-4000-47b7-9a27-ef1c2ca3e483.mp3";

//export const puzzleRImg = "bc5f2ff9-23e0-4c78-9faf-187475f3e0f2.png";
//export const aimRImg = "b1eb5874-5de3-4c02-ae37-433c96efa059.png";
//export const puzzleRAudio = "a9da53f8-9ac1-4d20-9dd0-53c923dad44d.mp3";

//export const lemonRImg = "8dc4f4fb-d8c4-42b1-b67d-7b77279ab1c3.png";
//export const lemonRAudio = "2a428354-d584-4999-b8e1-fcf0aeca6140.mp3";

//export const drumRImg = "ed6cff75-9f68-4650-b8d8-6cc0ec71f48a.png";
//export const drumRAudio = "c4f68661-76a6-4e79-ae62-7df8c309ee2a.mp3";

export const basketRImg = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
export const basketRAudio = "75ace319-2bdf-4ef2-8bfe-8f99dbc540aa.mp3";

//export const DinnerNewImg = "d8ae7f85-9262-434b-a813-5dd07780f7f0.png";
//export const shoutRImg = "eb944944-ade7-464c-9566-a0fa4585c731.png";
export const DinnerAudio = "a01366a7-e0a6-4a00-9e44-afcabfe46190.mp3";

export const sunShinesImg = "c1c4cf77-b951-4c2f-a2aa-ecd8725e7702.png";
export const wePlayImg = "bf38ed9b-01e5-43fb-b981-daa83f1fd63c.png";
export const heDancesImg = "0db9a578-3b48-4d6e-908f-3fd95d09c894.png";
export const sunShinesAudio = "bacfa1df-a291-484a-8bfd-2ce3dd5e4d8d.mp3";
export const fishSwimImg = "024d99b9-19dc-4bb7-82db-ccc5f23933f8.png";
//export const dogsBarkImg = "0012d4ce-4413-496e-814f-db47e408f1b5.png";
export const itRainsImg = "71d1f707-44ad-49d6-a8b5-e37096db3ec7.png";
export const fishSwimAudio = "d73b01b7-98d3-44f4-832b-31552e621dbb.mp3";
export const birdsFlyImg = "e6221717-d50b-4ca0-a0ad-d0ca93c73bfc.png";
export const sheReadsImg = "53a1261c-45c8-479c-ad78-2e5c5010526b.png";
export const weWinImg = "40c70927-e024-46c6-a4fc-856628d5d52d.png";
export const birdsFlyAudio = "f251e1e7-90c6-4f63-ac94-c7734df1a242.mp3";
export const sheSmilesImg = "7bb340e4-9549-4261-9724-c4dab309b899.png";
export const babyCriesImg = "2639fe7e-1422-4fcb-9382-d0138711b9a1.png";
export const heEatsImg = "05d02b15-f45b-4175-bdbd-323af82c33be.png";
export const sheSmilesAudio = "2106ad72-664c-43cb-9e2e-84622f68d11b.mp3";
export const youCookImg = "7547c0bf-6e0d-4151-99d5-db08c2f0aade.png";
export const theyLaughImg = "954c05e5-4cd8-452b-ae75-40e87f5fd908.png";
export const theyLaughAudio = "7f16821e-687f-4366-9509-4837202ac1bd.mp3";
export const wePlayAudio = "82877552-3a10-44d7-9683-90f64d63ee12.mp3";
export const clocksTickImg = "4c9fe4a6-8e62-441b-b9d8-3724c684d365.png";
export const sheSingsImg = "f9465763-4ce0-498a-b311-6891b0f404a6.png";
export const heDancesAudio = "8da026a1-c4b0-4c70-9bac-b8c11ac5c809.mp3";
export const flowersBloomImg = "1e3a27bd-f79e-4783-bcb0-3561652c6402.png";
export const sheSingsAudio = "7f06ea20-7c39-4621-8894-2dc9cf6ff417.mp3";
export const dogsBarkAudio = "344a89b5-b688-4ebb-9920-a6f91275c5cb.mp3";
export const iSleepImg = "94cff671-ae28-4a44-9819-0f104c73ec3b.png";
export const itRainsAudio = "34fddc0f-630d-40ca-82ed-7a7ae70d0d85.mp3";
export const youSwimImg = "eb0c4db7-ee6d-49bd-add2-c5292bbbbb7d.png";
export const youSwimAudio = "5f75ae16-870f-4de2-959c-5ee85ccb84bf.mp3";
export const iSleepAudio = "78dcd577-e299-47f0-b60d-278869d44bf1.mp3";
export const heEatsAudio = "5e0d0c63-5915-494d-a0cf-c303dee5194c.mp3";
export const sheReadsAudio = "80033243-d086-4835-b634-9524bd69c5f9.mp3";
export const clocksTickAudio = "3fff4b64-5f48-406d-99fc-88e1aafb6c02.mp3";
export const fireBurnsImg = "2471f4ed-9509-4e7f-bad0-f2b3efdb1186.png";
export const flowersBloomAudio = "a194c1fa-f6cb-4c97-a28d-8569d3e80790.mp3";
export const fireBurnsAudio = "1a804c02-c3c5-4251-a68f-2845f86aeb02.mp3";
export const babyCriesAudio = "654634db-5e03-4d3f-8216-f88edcf014fd.mp3";
export const youCookAudio = "5e9bdb5a-3df7-4789-8608-89e3b3b144e5.mp3";
export const weWinAudio = "14495c91-e4fd-493c-b219-cd27ab992df9.mp3";

export const Father = "6c26a434-6cae-4b59-844c-5ed360177267.png";
export const fatherNewAudio = "b54e3b55-f217-44b8-88ea-74f04139a651.mp3";

export const mangoR1OneImg = "186c263c-b157-44a0-99e4-636f83dc5ebd.png";
export const mangoNewAudio = "b0759f9c-7b52-4c67-ada8-2952933b8b78.mp3";

export const Mother = "0ffcd7ce-47c9-4d8a-b14b-ba4cc7a23be3.png";
export const motherNewAudio = "a2672cff-2529-4049-9f87-cf8b45e381b5.mp3";

//export const pencilImg = "dfa309a9-713b-4726-b822-d0423c033175.png";
export const pencilNewAudio = "d665d6b3-e427-44f6-897f-9080c51d11f4.mp3";

export const waterImg = "062a7af5-7dc7-4b3a-8977-e26fbbc8fc31.png";
export const waterNewAudio = "bf1a9a89-0607-4c72-91f0-5e0cf699cec0.mp3";

//export const basketImg = "312cdd6d-e995-469a-ba3f-f3b8cbfeccd5.png";
export const basketNewAudio = "04b93f9b-8ff4-4b9a-89d3-85c623bf4695.mp3";

export const cricketImg = "5a51abc0-cd61-4a07-b5e7-f3fa1c87182b.png";
export const cricketNewAudio = "0a75e2ec-7f59-45df-9223-1dcfc059cd7f.mp3";

export const doctorImg = "e03c3dbf-a6a2-4b0c-a5ca-6583c2b22af0.png";
export const doctorNewAudio = "63391d95-d84b-4d70-a067-bc5eccb35dfe.mp3";

export const marketImg = "b0d3e32f-ff4f-470a-b744-567eff9d1f99.png";
export const marketNewAudio = "9c2c72cd-96fd-4899-806c-1cf40f159434.mp3";

export const windowImg = "2fc1a46c-7a7b-44de-8f2d-da5a69b6793d.png";
export const windowNewAudio = "4e50ad4f-9df7-4b65-8c5e-3b9b13c6345d.mp3";

export const balloonImg = "dc7c02df-4cb4-46c7-83e0-53cfc962ab24.png";
export const balloonNewAudio = "0ff989d4-cfc0-4592-97dc-d4af19bf1cec.mp3";

//export const bicycleRImg = "0548cabb-fda1-49fe-884d-a5c480c8240c.png";
export const cycleNewAudio = "d9e60dd3-12a2-49f7-9bf2-2cc231d053be.mp3";

export const candleImg = "deb25a51-ce94-4835-802e-5172f5906d42.png";
export const candleNewAudio = "9d512ab4-da20-41a8-b899-5676fdc63e95.mp3";

//export const gardenImg = "07c44745-e9e3-4264-9645-3da09b4d66c8.png";
export const gardenNewAudio = "fb6b6ee4-0f5b-44af-afe9-c93091b71798.mp3";

export const scooterImg = "2f68c007-3277-4ca0-ac65-905c40af4fbd.png";
export const scooterNewAudio = "d08203de-438c-4bfa-9411-6a840cd6c1ce.mp3";

//export const flowerRImg = "ecb2ac92-c9ab-453e-bf89-015e9407e342.png";
export const flowerNewAudio = "7f76eea0-e602-4751-9015-924121ba0fcf.mp3";

export const papeerImg = "b0dee69a-b90e-4098-bbca-1722a05f05c0.png";
export const paperNewAudio = "2163f839-c007-4c01-ac4c-9539c3fbb5f6.mp3";

export const puppyImg = "6b6eddcc-c407-44a9-b08c-247f81d352a6.png";
export const puppyNewAudio = "86be014e-bb23-403d-b6e3-9f73ebf8aac9.mp3";

export const studentsImg = "3b34219b-1ed7-435a-b6ab-b0c3cb0b7962.png";
export const studentNewAudio = "c9d20f52-6d62-426b-a784-c6493ede67cd.mp3";

export const musicImg = "ef9d0cf3-8041-42e7-bdf4-b2b45b5418f3.png";
export const musicNewAudio = "2610cc0a-4af9-45e4-bec5-e86b6b7df06b.mp3";

export const superMarketAudio = "680e320f-e18e-4083-abb4-4b93ec121206.mp3";

//M13P1
export const level13P1CAudio = "382ac38e-e2ab-4f3c-822e-0b173088c75e.mp3";
export const level13P1Audio1 = "32f1ed5b-9c42-4605-95ee-a194cfedc96a.mp3";
export const level13P1Audio2 = "9f482291-618a-475c-8afb-d312645b382f.mp3";
export const level13P1Audio3 = "9f482291-618a-475c-8afb-d31264553666.mp3";
export const level13P1Audio4 = "04cebdcb-542d-4fab-9f4c-48969170011e.mp3";
export const level13P1Audio5 = "04cebdcb-542d-4fab-9f4c-489691753666.mp3";
export const level13P1Audio6 = "53411352-fe0b-4d68-b8aa-079eb284ef47.mp3";
export const level13P1Audio7 = "53411352-fe0b-4d68-b8aa-079eb2853666.mp3";
export const level13P1Audio8 = "afcf2e70-01cb-4ef9-bd0b-f1eb65037006.mp3";
export const level13P1Audio9 = "afcf2e70-01cb-4ef9-bd0b-f1eb65053666.mp3";
export const level13P1Audio10 = "87c8c421-8c04-4452-ad83-01e39f5a3639.mp3";
export const level13P1Audio11 = "87c8c421-8c04-4452-ad83-01e39f553666.mp3";

//M13P2
export const meetingImg = "7de8bdf8-ecd6-43da-bc49-038a6cfad54b.png";
export const vacationImg = "8bfa6176-3b07-484d-afd9-16d9a46fd359.png";
export const partyImg = "721e39b7-8b56-42e8-a29b-0bb7efbb6839.png";
export const mall3Img = "59acadd9-5d42-4fdb-af7d-20dea54752e0.png";
export const hillstationImg = "8db64297-c18e-4a89-b1ee-2e4a1766aa25.png";
export const restaurant2Img = "40918719-b659-4427-b2e8-95e0f2928daf.png";
export const fiveImg = "349383bc-9849-4fd5-9da4-050e49ce6ff9.png";
export const tenImg = "0159baa4-d330-44a5-a1b8-a1a7bab4db8b.png";
export const threeImg = "d9697190-60be-4022-93db-23b9c64b344b.png";
export const alone2Img = "5750d0ef-cfc8-4119-bad7-6108a15a7462.png";
export const family2Img = "5f1a001d-092d-4804-a14b-5e69304e38b5.png";
export const freind2Img = "5e9d3207-6fd4-4b54-91d5-597ce4a284e1.png";
export const sunriseImg = "6ae36924-9c97-4ec9-a626-5ed42c3fd9cc.png";
export const peopleImg = "363f84bd-9a7a-480d-850e-3f053d44a955.png";
export const villageImg = "1d39ce31-e212-4096-aba9-52cd1de3ab69.png";

//M13P3
export const henOneImg = "469e1743-60b3-46e6-997e-a615f712c57b.png";
export const henFourImg = "448d8407-81ec-44a7-9d03-d19e99843c3a.png";
export const henThreeImg = "79a95b0a-d5d8-4354-9bcb-207e1c718bfb.png";
export const henFiveImg = "aae5ddeb-27dd-4c51-86a1-6bda034fc146.png";
export const henTwoImg = "cab63c6d-ec6f-4467-a717-1a4dcb8458cf.png";
export const henOneAudio = "c3f6050b-56a3-46c7-bbb0-65acf156f22d.mp3";
export const henTwoAudio = "37dd4bfb-55f2-4957-93d4-369a91de9a7d.mp3";
export const henThreeAudio = "56d42f29-08c4-4d5b-b3ee-49ee8ba7bf1c.mp3";
export const henFourAudio = "600c8eb9-cfed-4173-8fc6-899a27fffc8c.mp3";
export const henFiveAudio = "1dca512f-1865-4203-b9ef-a36bcdbd28fa.mp3";

//M13P4
export const healthyHabits2Img = "0013ae35-6a5c-40c1-98a6-936756b9cb04.png";

//M13S1
export const level13S1CAudio = "cb3391a1-d757-4049-903d-40360a62dba6.mp3";
export const level13S1Audio1 = "c5adfde1-18e7-4ffc-98d8-828d04f1dc84.mp3";
export const level13S1Audio2 = "0e83e1cc-ce4d-4f4d-8fe8-3c712a1a7902.mp3";
export const level13S1Audio3 = "0e83e1cc-ce4d-4f4d-8fe8-3c712a153666.mp3";
export const level13S1Audio4 = "61069c3f-76d2-4ff7-b9d5-e70608fb6875.mp3";
export const level13S1Audio5 = "61069c3f-76d2-4ff7-b9d5-e70608f53666.mp3";
export const level13S1Audio6 = "8851c001-2eed-4c16-8b29-25ab92ba1e34.mp3";
export const level13S1Audio7 = "8851c001-2eed-4c16-8b29-25ab92b53666.mp3";
export const level13S1Audio8 = "47695f35-c6fe-43cb-848f-ff99ba7700ca.mp3";

//M13P5
export const level13P5CAudio = "7327e8d9-7ed9-434a-9973-1a903190e6dc.mp3";
export const level13P5Audio1 = "8c5ce169-6b30-46ed-957c-ea7749de7172.mp3";
export const level13P5Audio2 = "33e7a236-ff33-49e7-a552-3d08377d0dde.mp3";
export const level13P5Audio3 = "33e7a236-ff33-49e7-a552-3d0837753666.mp3";
export const level13P5Audio4 = "8352f8e8-6767-4cb8-bead-991a16b60816.mp3";
export const level13P5Audio5 = "8352f8e8-6767-4cb8-bead-991a16b53666.mp3";
export const level13P5Audio6 = "235a0307-0a08-4c76-9603-41b25c7b8963.mp3";
export const level13P5Audio7 = "235a0307-0a08-4c76-9603-41b25c753666.mp3";
export const level13P5Audio8 = "1bc4f4ee-f78d-49e5-a231-6a1047760d14.mp3";
export const level13P5Audio9 = "1bc4f4ee-f78d-49e5-a231-6a1047753666.mp3";
export const level13P5Audio10 = "bdb93886-3ffe-4540-8e87-ae2cb1148212.mp3";
export const level13P5Audio11 = "bdb93886-3ffe-4540-8e87-ae2cb1153666.mp3";

//M13P6
export const racketImg = "9b66012e-d3b7-4dd2-a332-5469b218aab7.png";
export const netImg = "4f99897c-d14e-490a-abee-2e9784af45bc.png";
export const batImg = "4d662d87-4103-42c9-ac9d-23884b7f1992.png";
export const stadiumImg = "2c605b29-980c-47c4-811e-9a3a2fd1393d.png";
export const coachImg = "f1564103-1ad7-4c80-936b-6361ec73c8b2.png";
export const doctor2Img = "50ebd11f-b482-41a4-b397-a3f95d85837c.png";
export const teacher2Img = "3eb07c4e-2092-4601-a707-3b3e5af4573a.png";
export const water2Img = "97dff11f-b5ad-47bb-8cfe-8c055b99787b.png";
export const juice2Img = "73396dc5-0c80-410b-83b2-890fcd754187.png";
export const milk2Img = "55eae923-6a87-48ac-96fd-08514478f9e4.png";
export const breakfastImg = "08dfa62e-af52-48bf-a4ee-97d164076206.png";
export const burger2Img = "0a4250e6-ed08-4981-b96e-3e0ba74c1042.png";

//M13P7
export const butterfly1Img = "fb2c9a14-2f08-4d1f-aacf-a9b150fbd6e9.png";
export const butterfly2Img = "8603df19-6c24-4b93-8da6-cfb4077e0eae.png";
export const butterfly3Img = "41a1818a-4ca2-42c8-8350-257f3ba0691a.png";
export const butterfly4Img = "34f8ab46-845d-49f6-ad9f-f0e0b5b7f9a7.png";
export const butterfly5Img = "323e32c5-3945-468a-bd18-65503ba3317b.png";
export const butterflyOneAudio = "6a7a4f91-158e-4ac7-ba58-10c1f1f46ebd.mp3";
export const butterflyTwoAudio = "6e6c808b-3226-444d-a37f-372783e14528.mp3";
export const butterflyThreeAudio = "6168e928-f449-457b-904b-b71795841c11.mp3";
export const butterflyFourAudio = "1aeb2a94-3040-45f5-890c-972fd2cc47d6.mp3";
export const butterflyFiveAudio = "17d8bf00-dc58-429b-b94d-e5c7c9e2fe94.mp3";

//M13P8
export const roadSafety2Img1 = "9a7b7769-063f-4643-9e9b-d769a61d7951.png";
export const roadSafety2Img2 = "520b289d-062e-4b57-afff-64ce0816783f.png";
export const roadSafety2Audio = "a465b2b8-fe08-4aa2-ae7d-10f3af4b97dc.mp3";

export const bengaluruImg = "0ec69ace-ce8a-42c3-865b-76f9d80824da.png";
export const hospitalImg = "d8cd7610-7c19-4fcb-9ea2-0f549b860e73.png";
export const restaurantImg = "7b7d1cde-51e6-4088-b8f1-c3059764f838.png";
export const aloneImg = "d28c1ea6-bef7-4dd8-8310-87069292429e.png";
export const groupImg = "ab29cde8-197b-4466-b1af-746d695cc95c.png";
export const familyImg = "817ed644-e9b2-436a-9b7e-932e215739bd.png";
export const petImg = "0ff82049-384d-4c24-9bf7-bb8a63af37c4.png";
export const friendImg = "8a5354d0-0944-4788-9de2-1851af77ae0b.png";
export const teacherImg = "206b38d7-4127-4818-a47e-153ed3b35f55.png";
export const fairOneImg = "243c1811-01c1-43b3-a21a-6acb469fedb7.png";
export const fairFourImg = "2eaecfe5-a781-492a-9ab8-af01840b9e75.png";
export const fairThreeImg = "f00462ba-6e78-4019-bb95-adf4a6212e8b.png";
export const fairFiveImg = "c517e938-6536-488f-8902-1256a6eccb41.png";
export const fairTwoImg = "2854e3a8-db40-4d99-910b-c4f057a912e0.png";
export const fairOneAudio = "db51b8c2-3a08-45ff-9362-175d0a5c40b1.mp3";
export const fairTwoAudio = "cea8a2d9-b796-46af-9e26-7860d6473cb0.mp3";
export const fairThreeAudio = "349edbe4-ebb7-4f10-978c-888993509dd6.mp3";
export const fairFourAudio = "8327296a-679a-403c-bb9e-392ccbd27aed.mp3";
export const healthyHabitsImg = "9ec160c8-766c-4646-958f-94a667ac1964.png";
export const shoesImg = "29212161-1c14-41ae-bd6e-87b5969c1252.png";
export const hatImg = "b1c1787f-be4c-48a7-b01c-2d3d5970f9cf.png";
export const glovesImg = "237ec9af-9c1c-4a0c-aac9-1c4d14c9654b.png";
export const parkImg = "44555c03-7861-4174-bc17-6ee6baf54ddd.png";
export const mallImg = "2f30b3ab-220c-427b-95c7-edf3452bbbc9.png";
export const officeImg = "97eb6889-c5bd-4034-9a4f-6539c9b8a2f9.png";
export const thirtyImg = "69a4e043-d0e1-44e6-b2af-6be26f8803f7.png";
//export const fiveImg = "ae5a3725-48cc-4fba-ae26-b5cc1902ad2a.png";
export const sixtyImg = "6eac8731-adee-48c2-a7b1-0c2a956f8e9a.png";
//export const waterImg = "589f1bd2-4272-4f5f-87db-0923aac6765f.png";
export const juiceImg = "899f394c-3d8a-48fe-b941-224e39f58aea.png";
export const milkImg = "dd005ee7-15da-4563-9544-507587f5264d.png";
export const smoothieImg = "f61243ae-3ddc-483a-adfc-cfbe0c01c8ab.png";
export const burgerImg = "6962e00e-ce2e-42b1-ba9c-4dfef45c9f86.png";
export const pizzaImg = "2370e2ca-4aab-4880-9c55-281cd4d41f22.png";
export const puppyOneImg = "9323413b-c982-445f-832a-6d180ef5d803.png";
export const puppyFourImg = "fab193ef-57a4-4443-a8d9-656195a7c1a7.png";

export const puppyThreeImg = "cf78aa57-8d61-4546-a656-820c5787e767.png";
export const puppyFiveImg = "5e655ccb-b938-4428-9a58-def0c2f87407.png";
export const puppyTwoImg = "347b585c-d047-4194-817d-0b9e445e0367.png";

export const puppyOneAudio = "26076cca-2de7-4316-ac6f-30528efe0257.mp3";
export const puppyTwoAudio = "4155aeef-2f8d-41ee-b676-2e016d26c517.mp3";
export const puppyThreeAudio = "351c8150-edb1-4e41-8928-71e88066b5de.mp3";
export const puppyFourAudio = "7792d1c8-f1db-456d-950d-df7334c86875.mp3";

export const roadSafetyImg1 = "5dbd3768-4e06-41f3-91af-0d641e84bbda.png";
export const roadSafetyImg2 = "f9aeac87-7a33-45b2-b0e0-cf1ef5e229e6.png";
export const roadsafetyAnouncementImg =
  "c8ea41ca-4462-4d91-abc9-de32a6a7a17e.png";

export const roadSafetyAudio = "b2c4dd09-26f2-4613-b066-ee7e25d01bca.mp3";

//M13S2
export const level13S2CAudio = "420e5f17-7732-4ddd-928b-e8b2f025aa92.mp3";
export const level13S2Audio1 = "215b4ee8-0b6f-449f-a255-bb64f0fa0009.mp3";
export const level13S2Audio2 = "aacc273e-f37c-44c8-b2c6-4dc0717c4fde.mp3";
export const level13S2Audio3 = "a7c03a9a-13d3-4228-8527-00a3dfea8869.mp3";
export const level13S2Audio4 = "0029b9ea-28eb-48e6-82be-877219e18b22.mp3";
export const level13S2Audio5 = "d711339c-6046-4ead-8942-3db286c374ce.mp3";
export const level13S2Audio6 = "d47feb58-cb82-425d-87ac-65ed4bf92511.mp3";
export const level13S2Audio7 = "3125011b-f314-4cf6-9548-ff94579a0767.mp3";
export const level13S2Audio8 = "40f358a4-fc26-408a-8691-003d6818d489.mp3";
export const level13S2Audio9 = "7f96f637-b06e-4934-b294-86b25d361862.mp3";

//M15P1
export const UniversityGirlImg = "b7744e23-ae77-423a-935d-2911165fa1a1.png";
export const level15P1OneUAudio = "c5b06acd-2308-4e9e-a6f2-b8b45854f2cd.mp3";
export const level15P1TwoUAudio = "85714f2e-0228-4261-97d0-dd7c51c8b0f7.mp3";
export const level15P1ThreeUAudio = "fd6398c3-4669-4138-8c27-71fb3fdf31b3.mp3";
export const level15P1FourUAudio = "bf19734c-3c3b-4e01-9c2f-35c48c80917b.mp3";
export const level15P1FiveUAudio = "1a662eda-9a32-4daf-bf6a-04c94c24af1b.mp3";
export const level15P1SixUAudio = "1ef31155-93a1-4e0e-b000-4f301dd23ac6.mp3";

//M15P2
export const level15P2OneAudio = "75db381c-6897-4f09-a897-22ad35084549.mp3";
export const level15P2TwoAudio = "0d573625-9236-42f6-927f-447694c8c677.mp3";
export const level15P2ThreeAudio = "54534a3b-c929-45b0-a907-4b094fb0255c.mp3";
export const level15P2FourAudio = "5c405ac4-26ce-426c-a8ba-7948252ed033.mp3";
export const level15P2FiveAudio = "34814e9e-7ea5-4aa8-950e-0284290ec8f0.mp3";

//M15P3
export const BeltAudio = "b7f4811e-c22b-4b58-a527-7a3e592d5a12.mp3";
export const WatchAudio = "13cf3563-13ca-4e6d-8637-8a274843cd40.mp3";
export const BraceletAudio = "94cc00c5-8509-4f4a-b3f3-07063680efdd.mp3";
export const PenAudio = "ec7a8caf-7b52-4338-8fcb-131caadacbb5.mp3";
export const ChalkAudio = "c1e5bd6e-8bd5-4954-8996-ededed4d930b.mp3";
export const EraserAudio = "1ef31155-93a1-4e0e-b000-4f301dd23ac6.mp3";
export const GlovesAudio = "d2cd8413-6603-4014-a178-13bbd18af348.mp3";
export const ShoesAudio = "b0b10722-4bdf-4da9-810b-e5f08b37d0bc.mp3";
export const CapAudio = "0ac3a347-6283-449f-a6a6-ebc8b766ef1d.mp3";
export const FlashlightAudio = "a9d83e01-bc6a-461c-a58d-5c1d6beaba86.mp3";
export const MirrorAudio = "b0921507-e770-4b4d-9698-e61ec7eb7b71.mp3";
export const RulerAudio = "ca0658fa-c006-4b0a-8ba0-5e5f95c72726.mp3";
export const LunchBoxAudio = "9326ba7a-4470-4e51-8aa2-e07d2d6770d5.mp3";
export const NotebookAudio = "7e4c11e8-955d-40ad-b474-0629b7738f69.mp3";
export const ToyAudio = "63b5107a-9d0a-4454-b4ad-24c07c9f4750.mp3";
export const PillowAudio = "93e7e25d-12ee-473b-8e9a-39724504633c.mp3";
export const BasketAudio = "75ace319-2bdf-4ef2-8bfe-8f99dbc540aa.mp3";

export const BookAudio = "bddedb76-c5fd-4fb7-910b-8a760bfc132b.mp3";
export const KeyboardAudio = "bfc9b38c-abbc-4ce0-8982-8e994a00faee.mp3";
export const TeddyBearAudio = "eeecf97d-8373-40fa-b9ee-59659a1f5458.mp3";

export const TabletAudio = "cdfd35af-aeae-4799-bf32-5c5f6fdada75.mp3";
export const ClockAudio = "fa2765ad-47cb-4d48-9537-1fe8b62b3e1d.mp3";
export const BottleAudio = "af6bc5b2-6fb0-445b-a961-f30348560e6e.mp3";

export const TelevisionAudio = "114dc5e7-00cb-4959-8900-2fb5c26f2d91.mp3";
export const ChairAudio = "2407000e-b5d3-4aef-ab2b-9e17e7fc99d7.mp3";
export const TableAudio = "29c089b4-94c3-41d8-91df-e72fe99a920b.mp3";

export const GuitarAudio = "706ffbce-efc7-4221-a78a-1b4485ddc20c.mp3";
export const PianoAudio = "b54dd467-d711-4b87-b37e-c1cfc617875e.mp3";
export const ViolinAudio = "bb55860d-f416-4c55-a2de-283650ac7e44.mp3";

export const SnakeAudio = "a62ea2e7-3424-44bb-98fa-ca4235041609.mp3";
export const CrocodileAudio = "711bbedc-c331-4b15-bfe3-fd423526d590.mp3";
export const LizardAudio = "49141134-5618-470f-ba86-fef7ca818af4.mp3";

export const RhinoAudio = "deb70a42-0c9b-4274-aba9-aa2de9319085.mp3";
export const HippoAudio = "9097ef2e-3db0-488e-95e9-370ebb25157f.mp3";

export const ElevatorAudio = "07bef3aa-2f48-4d6e-a7be-4441b98aea3a.mp3";
export const SeesawAudio = "f48e5b2a-f8de-40e2-8240-ede354c04bbe.mp3";
export const StaircaseAudio = "8056a2a1-543f-4ffc-9ad9-530731d9a045.mp3";

export const CloudAudio = "420031e4-c82f-4867-a1df-06f2519f4155.mp3";
export const BirdAudio = "7b5a1a9c-7c92-46a1-aecd-3b5069df9191.mp3";
export const WindAudio = "d5528aea-75dc-44fb-bd48-4b6762456f02.mp3";

export const MicroscopeAudio = "0015a84a-a290-4c87-b4bc-14bd77295406.mp3";
export const TelescopeAudio = "a98d75c8-9b2d-45c8-a419-741690ce7928.mp3";
export const BinocularsAudio = "855cb7b1-4c68-4b93-964e-2908cfbb5cd2.mp3";

//M15S1
export const level15S1OneUAudio = "41897884-e79b-4f80-bd07-2b9436a0ff4f.mp3";
export const level15S1TwoUAudio = "1b33b69c-b1e8-48ff-91cb-526f3255a7cc.mp3";
export const level15S1ThreeUAudio = "a53fe531-9a5d-471b-a761-88f1c752f25f.mp3";
export const level15S1FourUAudio = "5e0597fc-2a68-4b2f-8e5e-5b233a829dbc.mp3";
export const level15S1FiveUAudio = "e6f56b1f-f978-4778-b9f9-d9d7470ea494.mp3";

//M15P4
export const PenguinAudio = "3b1a1b7f-3b18-49b9-ad8d-ccfee740916b.mp3";
export const EagleAudio = "27cbc3f5-6138-4725-ad10-fdbb3bf605f4.mp3";
export const DuckAudio = "77761273-f075-489c-a9f0-c51ad4f24c25.mp3";
export const HorseAudio = "e708b1cd-13d9-4d7e-8be1-a27dfd53bbd3.mp3";
export const ElephantAudio = "36e64a0a-1757-4e6a-b2ad-ab465efd914c.mp3";
export const GiraffeAudio = "711a2715-1633-48f8-a1ea-8902f0cb9904.mp3";
export const RabbitAudio = "1e216475-748a-409d-9656-eb67a1251479.mp3";
export const CatAudio = "37b2bf4e-9c7e-47fa-b8e3-fc63f77482e9.mp3";
export const ParrotAudio = "60358dc3-749f-4b50-b469-464237e11b4a.mp3";
export const TigerAudio = "5f5c440d-f421-4ae5-bc28-d4fb98ad7578.mp3";
export const LeopardAudio = "cf747989-8f92-4a6d-b267-84f9b48b660f.mp3";
export const CheetahAudio = "f728f950-0506-47ee-8534-589e5951ce20.mp3";
export const CowAudio = "2f1c4637-3e1b-4aa2-99ce-0f6339390742.mp3";
export const SheepAudio = "758ee4d8-216b-43e7-8fec-b64d43c4420a.mp3";
export const GoatAudio = "27724b3a-c1b2-4588-b429-cc82705a673e.mp3";

//M15P5
export const TomImg = "4f39285a-6d64-4f78-b01c-d273909a5fc5.png";
export const JerryImg = "80700e62-31ba-4341-bbe3-f60e10a12a93.png";
export const level15P5OneUAudio = "aa806828-dda8-4cfd-8150-29799a736d82.mp3";
export const level15P5TwoUAudio = "14dced6a-fe81-4e91-b679-348b34fa3598.mp3";
export const level15P5ThreeUAudio = "ddfebe41-95a4-4d37-adf2-0b3953e10d74.mp3";
export const level15P5FourUAudio = "6a0592ed-f011-4672-beba-5b0d5efd7826.mp3";
export const level15P5FiveUAudio = "8064d9a2-79b8-4299-b420-c63871cfa059.mp3";

//M15P6
export const level15P6OneUAudio = "913bc72e-7840-40f0-a385-5d1f7fd6f9be.mp3";
export const level15P6TwoUAudio = "890187d2-2c9c-4177-883a-b8e118c5d5c0.mp3";
export const level15P6ThreeUAudio = "be2b5bf2-2c0a-4eef-bcc4-18c9973d2098.mp3";
export const level15P6FourUAudio = "e2a124af-b470-432f-b869-e5c431f58e6f.mp3";
export const level15P6FiveUAudio = "3eb3f536-d079-4f05-a68d-2e50c0ffc228.mp3";

//M15P7
export const MeowsAudio = "37b2bf4e-9c7e-47fa-b8e3-fc63f77482e9.mp3";
export const BarksAudio = "ccecdbaf-389e-4643-af53-6258fae7c6fb.mp3";
export const HissesAudio = "57742111-7c66-4560-933e-f22203a37352.mp3";
export const mooAudio = "c6e983c9-9ed3-4686-aa91-322474965d66.mp3";
export const NeighAudio = "b6c36f57-6929-4cf0-852a-642c2e24abf1.mp3";
export const MonkeyAudio = "0b3e2773-d25c-478b-90d4-27844ed13dd4.mp3";
export const LionUAudio = "ae727979-7e66-4a15-aa57-08faec0407aa.mp3";

export const GrowlsAudio = "01148517-c439-4557-8b48-571d830eeae0.mp3";
export const RoarsAudio = "d1df5b6c-bcdd-42d8-9b34-e969e9c7fef5.mp3";
export const SnarlsAudio = "d04fa173-64e1-4296-9a97-c8ca29ed7b01.mp3";

//const ElephantAudio = "6fb1684e-20d3-4aa2-b3c2-daec489367bc.mp3";

//export const BirdAudio = "d80a5bff-6525-43e0-b46d-3e6da26c4adf.mp3";
export const DogAudio = "ccecdbaf-389e-4643-af53-6258fae7c6fb.mp3";

//const HorseAudio = "e708b1cd-13d9-4d7e-8be1-a27dfd53bbd3.mp3";
export const LionAudio = "6c228f8d-0a7b-463f-9f98-c3a25c41ebba.mp3";

export const childImage = "0fa4b96c-b5d7-4d5b-9916-87ca004237c4.png";
export const mallImage = "c9c58580-7d91-4380-bd08-44dfcf91e808.png";
export const supermarketAnouncementImg =
  "e0b78bf7-7249-4c13-bf2d-d947bee6252b.png";
export const superMarketAnouncementAudio =
  "b4f45bff-6f5a-44e9-869c-aaae6dfb03b9.mp3";
export const coconutM1Eng = "6ca98ad5-d0f7-4880-90c7-3943ac5c3707.mp3";

//Reference Audios

export const animalsM1Eng = "72139e23-f554-4361-ad3e-cce3ecd07fb2.mp3";
export const appleM1Eng = "0a5ca155-a486-4507-93ac-e28e7fca9ce4.mp3";
export const tableM1Eng = "a7121af9-09ee-47e9-808f-5e5273acf761.mp3";
export const mangoM1Eng = "63e6245f-9299-4864-a035-1b8518689509.mp3";
export const pencilM1Eng = "fde646c8-b0c3-450e-bec6-de8b092d1f94.mp3";
export const monkeyM1Eng = "1cf0cfe2-dc47-4d6f-8a82-f8a1905ffa01.mp3";
export const bicycleM1Eng = "8a075f16-8853-4f53-abd0-59a9823eb6d0.mp3";
export const glassM1Eng = "7ff02a2e-0521-4d32-bd21-413bf050ceb9.mp3";
export const orangeM1Eng = "392b5a00-5264-48ed-af88-591dac179592.mp3";
export const numberM1Eng = "997c428f-a43c-4a4f-ac62-d0a65eb6cae0.mp3";
export const sleepM1Eng = "36245a60-0d68-47c2-9764-58b28bb398f9.mp3";
export const bananaM1Eng = "e01ab927-cffb-4918-85ed-9d773aef0c74.mp3";
export const elephantM1Eng = "ecdd9f68-d6ce-44b1-9718-7642fc121784.mp3";
export const basketM1Eng = "5a85e9f1-85d8-429b-9327-cc773254a5ac.mp3";
export const calendarM1Eng = "f17cfc85-1815-49db-ba30-3efd82437ea4.mp3";
export const zebraM1Eng = "f776dae3-de00-4cad-808b-dd06fe7b42ba.mp3";
export const lionM1Eng = "3df94bde-e32c-427a-82af-ccdc740f34a5.mp3";
export const doctorM1Eng = "05d55323-11a6-41c8-89a6-8d39344e2799.mp3";
export const horseM1Eng = "aff3bd06-fe49-436e-9ec5-7cca658fdbb5.mp3";
export const tigerM1Eng = "ec1acc7b-0b3e-46fa-8eac-280cb289dd7e.mp3";
export const spoonM1Eng = "c517393e-4df6-4d92-bcbe-0fc59e390c39.mp3";
export const wheelM1Eng = "eb4009e8-289a-4f95-bc59-a73c5642115a.mp3";
export const puzzleM1Eng = "df79c682-ca98-415a-a44d-2a97579f75c8.mp3";
export const tomatoM1Eng = "fd9d8fb6-d267-47f5-a607-426f97380f3f.mp3";
export const windowM1Eng = "60067a21-ab87-4e91-88cf-e6f188711cfa.mp3";
export const dragonM1Eng = "abbcdd42-b4d8-4fcc-bd73-668a0d992d32.mp3";
export const cameraM1Eng = "11ac3672-dccb-4ae9-a324-bc4e8712480f.mp3";
export const kitesM1Eng = "d2c43ae3-3ce1-4fa0-bfd5-6c3895bd1b90.mp3";
export const potatoM1Eng = "f1cfc4b1-7ec6-47ce-8740-cb7d4b11a77f.mp3";
export const balloonM1Eng = "eb0803f3-f255-4c2d-8c21-36baf4003c73.mp3";
export const dustbinM1Eng = "7c24e5c9-c705-4aa0-99ef-06863b72fbd5.mp3";
export const familyM1Eng = "400732b9-985b-4755-ad83-7971bfad6e98.mp3";
export const plantsM1Eng = "9573dc12-c291-4c07-937e-84a5368d4958.mp3";
export const happyM1Eng = "b0c44e88-0b91-4c6e-94fc-1fc77b22c69d.mp3";
export const spiderM1Eng = "acc70691-89be-4825-8d1f-08e990368aaf.mp3";
export const fruitsM1Eng = "a8756554-a353-4c55-8f22-9fed9b59d608.mp3";
export const handsM1Eng = "67900450-9f43-41eb-871a-2dd9f2d6bab7.mp3";
export const keyM1Eng = "274c1dcc-8543-4b4e-aeef-1b0daaf7ffca.mp3";
export const turtleM1Eng = "e4d78ab1-3ee5-4595-a09d-bc02d499a8a6.mp3";
export const stonesM1Eng = "0f9f1e3b-2063-4250-b854-9c675f324df6.mp3";
export const cardsM1Eng = "c2da7729-7452-4c9b-9d0b-73a284b2b525.mp3";
export const vegetablesM1Eng = "ae42d8a7-6cf4-4c18-91fd-14df0c737231.mp3";
export const phoneM1Eng = "950defd6-5c05-4fad-ac71-4c639db2a328.mp3";
export const moneyM1Eng = "4fd9d463-3ff6-48eb-b0a6-e525e6a9166d.mp3";
export const tongueM1Eng = "b58a3e85-f577-42de-bf2d-a06e81498a20.mp3";
export const grapesM1Eng = "f8db89d0-c662-4974-b5e5-68feb378696b.mp3";
export const clockM1Eng = "d8bc8134-0432-4a36-b7d0-f1f33359adf0.mp3";
export const puppyM1Eng = "58f982bb-6ed5-4acb-a64b-e5b008fceb2c.mp3";
export const peacockM1Eng = "75fe967d-1330-4f43-9558-1feb8c5136c1.mp3";

export const teacherM2Eng = "7f896d72-04ce-406e-a9aa-3e7884ff98fc.mp3";
export const cherryM2Eng = "c96a9d22-7918-4b7d-826f-4197fd075016.mp3";
export const dragonflyM2Eng = "4fc6c12e-9e48-4ec3-bc38-34ba80035c24.mp3";
export const woollenM2Eng = "7f7532ee-bf50-466b-a407-9d3c53d88bad.mp3";
export const footpathM2Eng = "99eee7a8-20a4-474e-ba1b-b41f93af937f.mp3";
export const chocolatesM2Eng = "adb677ce-c783-4c8d-a925-f3dde133a944.mp3";
export const sproutM2Eng = "503a7257-96a3-4884-9316-e43ff63d40a5.mp3";
export const clownM2Eng = "7b6e9303-546b-40fe-85a8-10e874312c0a.mp3";
export const utensilsM2Eng = "7bf39916-1106-47fa-b30f-aedf77bae4c2.mp3";
export const handkerchiefM2Eng = "e0e1ad47-fa1f-442e-a525-4e8754dc1382.mp3";
export const flowersM2Eng = "6e0f185a-c97b-4a02-995a-fcde578ab051.mp3";
export const mountainsM2Eng = "80010b69-012b-4c17-89c5-d6661af1115f.mp3";
export const thinkingM2Eng = "d84199d5-60f2-4bde-a57d-e1a472c920cf.mp3";
export const sugarM2Eng = "cc220d86-741b-4bcd-9e65-6fe3df220444.mp3";
export const chairM2Eng = "d06800bb-baad-40a8-a4a1-bad2544158fa.mp3";
export const teethM2Eng = "9d50e401-b7ce-4c7a-8438-7004d13cdf02.mp3";
export const cloudsM2Eng = "08bc5a21-d8de-4863-a3f5-29163ad8029e.mp3";
export const bookM2Eng = "40bf3e5f-0ef9-49b6-881c-35740b36339a.mp3";
export const kitchenM2Eng = "c7b6dac3-bfaa-45a6-939a-de0a138d5d28.mp3";
export const mouthM2Eng = "1b8c125a-06a3-446f-8f0d-be76e6e74e84.mp3";
export const drawingM2Eng = "aa22d175-706c-45ca-b450-9c85812fa88c.mp3";
export const mouseM2Eng = "25eda8ce-1cae-4a9f-8b67-09d65728ddca.mp3";
export const musicM2Eng = "ff80022d-67b8-48cd-9dc1-7ff0b65256df.mp3";
export const lunchM2Eng = "9d030546-ebbf-4a52-a30e-b339e1cc44ee.mp3";
export const clothM2Eng = "b2cf1e46-c5c3-41e5-a2d7-a300ef546c58.mp3";
export const goodbyeM2Eng = "0ec29f46-09be-4eb3-a697-74f615ce0f52.mp3";
export const textbookM2Eng = "5ebf562d-41a7-4e6a-b4cc-a14c138d839d.mp3";
export const earthM2Eng = "478346fb-2342-4338-841a-53ee6e5b6b3d.mp3";
export const oilM2Eng = "fd2d6346-8afc-4e76-bb78-fd1721f03e02.mp3";
export const aeroplaneM2Eng = "624125e2-d2c0-48a4-ae61-5900e2632962.mp3";
export const championM2Eng = "ae4499a4-cb44-42c9-a3f8-4bdcc20a3bc5.mp3";
export const cookingM2Eng = "420e9650-6340-413b-9a09-b5442eec3a6e.mp3";
export const sandcastleM2Eng = "aaafaaa3-b6fe-425f-ac07-b1340e0f9969.mp3";
export const warriorsM2Eng = "ef66778e-3c23-4b6c-8757-24705b5d7634.mp3";
export const mathematicsM2Eng = "0e9c54ec-2022-4a38-885b-3f81fbf2dde4.mp3";
export const branchM2Eng = "2fd6e773-fc71-4a42-81e9-08ee9057687d.mp3";
export const jackfruitM2Eng = "34fbc770-3381-49b4-be27-b1130216fba6.mp3";
export const beachM2Eng = "1253c7bb-3702-49a5-afaa-72c1744ca4d4.mp3";
export const womenM2Eng = "9a3e31ad-c558-4c3c-96e1-1493fbae915a.mp3";
export const soundM2Eng = "561d9390-d726-495a-bb51-7c74e271705b.mp3";
export const houseM2Eng = "512c3a18-6501-4639-a797-5cc79c99d734.mp3";
export const grandfatherM2Eng = "30a5223c-0ebf-46b0-815a-a15bac7b7f88.mp3";
export const notebookM2Eng = "c8bf42a4-f553-4d5c-bcc3-032f28666fe4.mp3";
export const curiousM2Eng = "6276af28-896a-4563-a695-a0119dbdb01e.mp3";
export const lecturerM2Eng = "a3e55d8e-6e01-40dc-a633-782dec61edbb.mp3";
export const monumentM2Eng = "f2be3964-72a1-41ae-9c99-d4a33a7c17c5.mp3";
export const stichM2Eng = "d37f940a-5af2-40b5-9a97-aef74caa2417.mp3";
export const cheerM2Eng = "68276437-b3f3-4995-aa0b-510e67454eb1.mp3";
export const brothersM2Eng = "a895c64e-7fab-4c42-bbde-e4e2ca14352d.mp3";
export const joyfulM2Eng = "e27df846-9d7b-44bc-9193-c54e1228b89a.mp3";

export const baadalM1Hin = "586cb504-53a0-4daa-b948-0161d42bb975.mp3";
export const tablaM1Hin = "e8446123-c204-4621-ab56-218a7e2f36fd.mp3";
export const chaavalM1Hin = "db5fbedc-d09c-4e33-ba9e-99abc5fe4de0.mp3";
export const koelM1Hin = "6a8d5c60-d53b-4a97-a831-384234b08deb.mp3";
export const kalamM1Hin = "c4191589-fe8a-4fc4-b62d-849f38f02ab3.mp3";
export const matarM1Hin = "d88aa8d1-47d0-4002-b6bc-10a8f3f4fb41.mp3";
export const palangM1Hin = "97ae82bf-d4d3-423b-9fe0-00745b0be51a.mp3";
export const matkaM1Hin = "56bf981d-d12f-449a-b78e-6970e9a41921.mp3";
export const mandirM1Hin = "194710db-0c13-4a5a-a355-9cec19263139.mp3";
export const kadduM1Hin = "324c120d-c52a-40e9-a94b-d2091c054689.mp3";
export const santraM1Hin = "0b44a162-bf7b-450b-b630-3c3624371c80.mp3";
export const bottleM1Hin = "f2ca224a-b9d1-4241-ae34-48cfb924bee2.mp3";
export const bakraM1Hin = "0e03ad7e-c47a-48d9-ac1a-61c70f1894de.mp3";
export const achaarM1Hin = "64477069-1dea-4260-bd8b-16ca8813d785.mp3";
export const dumrooM1Hin = "64fde5d4-4d57-4b29-8e2c-b9b9c4422ec3.mp3";
export const takiaM1Hin = "1988131b-cebb-476a-b5ac-985463817ab1.mp3";
export const teacherM1Hin = "69977348-ee0f-4be1-898c-ef52161952fd.mp3";
export const bandarM1Hin = "21e50c46-ecf0-4401-b0bb-b32cc8698007.mp3";
export const langoorM1Hin = "7e13fa46-2f9f-4286-b8b0-8e675eec3ad6.mp3";
export const gaajarM1Hin = "f94efb34-906c-423e-9109-ab04e93c8061.mp3";
export const hiranM1Hin = "2e29070a-4cfa-483c-8d27-78f35ab4acc0.mp3";
export const soorajM1Hin = "2931aab7-c875-41c6-82f2-e36407e05588.mp3";
export const glassM1Hin = "896d35ac-cf9a-4679-97a3-05f18f98827f.mp3";
export const naukaM1Hin = "0257f0fc-8eaf-4268-bc66-5b1699b11548.mp3";
export const pedM1Hin = "553c149a-ec53-4cfa-9343-7fa94bbec305.mp3";
export const gendaM1Hin = "b531e140-740c-4336-be95-f146f012e1d2.mp3";
export const sarasM1Hin = "c594042f-8476-4486-bb08-e2fcac0143e9.mp3";
export const tirangaM1Hin = "6d08e74a-12bc-45cb-b234-c6dbff220229.mp3";
export const pagdiM1Hin = "ec284410-a247-4727-800b-0411f06d3f29.mp3";
export const batakhM1Hin = "f1cdbef4-b826-4efb-8179-32443fa65d0f.mp3";
export const paisaM1Hin = "19c78105-ddbf-447b-8757-17cbeaec633e.mp3";
export const cheentiM1Hin = "a3625f52-4340-48bb-9958-7bd2624ddfea.mp3";
export const kheeraM1Hin = "acfa670d-5262-464b-9f89-fe843da16747.mp3";
export const bheD_M1Hin = "7d5b456a-af08-4cf5-8c11-af78c140d78c.mp3";
export const chabiM1Hin = "db34ded4-2034-4369-b8be-63233261bc37.mp3";
export const rotiM1Hin = "2f1f9107-2e48-4319-a2c7-073c833d595e.mp3";
export const mooliM1Hin = "d9c433f9-7af4-4adb-8382-20cc88d318c3.mp3";
export const lichiM1Hin = "bb03beba-5bd5-43bb-bd9a-8cf21c002b86.mp3";
export const neembuM1Hin = "f2edc2bf-2851-4222-8dd1-05a3bed04c16.mp3";
export const holiM1Hin = "7d293dcf-283c-4070-8e70-db58d4b8bc8a.mp3";
export const kelaM1Hin = "18fe9572-66c2-4322-8027-2325d9910f0c.mp3";
export const bhaluM1Hin = "09f5cc93-a27e-443a-acd8-b9a0556bec33.mp3";
export const gobhiM1Hin = "57d33683-3435-47de-a6e8-e912926bebdd.mp3";
export const chuhaM1Hin = "90164fc1-80c5-43f9-9797-5b76d03439e1.mp3";
export const ghodaM1Hin = "0f3c9621-6719-47d1-acd6-d94f03abceac.mp3";
export const moochM1Hin = "4778be90-b1e1-4efe-b42f-3b4bdab5de62.mp3";
export const laukiM1Hin = "1c4a8244-3762-4da9-87d0-cee86459fa03.mp3";
export const towerM1Hin = "c576e818-31d6-47ea-a200-a4989e646f58.mp3";
export const naniM1Hin = "26d4e53e-429d-472f-9077-bc96782c9062.mp3";

export const khelkudM2Hin = "7672fcdb-fc9a-4057-9deb-fd2f00bac5bd.mp3";
export const mobileM2Hin = "92bc1754-d195-4dd1-a7d0-a96cbcf6f447.mp3";
export const helmetM2Hin = "6983389e-edc2-4801-ab01-35217d159bf3.mp3";
export const bandgobhiM2Hin = "bfa3945b-07fe-48ce-b0c1-2c67bedf3ba1.mp3";
export const moongphaliM2Hin = "135be8da-cb9b-492d-9656-da821664ff37.mp3";
export const doctorM2Hin = "66feebe6-2270-4452-9253-99c918fe4d3a.mp3";
export const masjidM2Hin = "f308078d-c81e-45ce-bfb4-f0545c7ffdc4.mp3";
export const gubbaraM2Hin = "4a9706fe-57f1-4e73-9aeb-1546e92286ce.mp3";
export const machharM2Hin = "69d4981a-a823-45df-a711-718d8011edac.mp3";
export const scooterM2Hin = "1777d1a9-7512-4ecd-a3e0-a30901c27ace.mp3";
export const mirchM2Hin = "c4990fa4-1a65-40f0-9102-48d805cb13ae.mp3";
export const gulabM2Hin = "eafeefc7-0c34-4c31-9832-2da3af8736cf.mp3";
export const basketM2Hin = "ee04f2d7-d70d-4383-b89d-b030b642182a.mp3";
export const circusM2Hin = "c2ddecfd-b834-496e-bf33-749f7830bc60.mp3";
export const krishnM2Hin = "1c84605e-7ff6-4c49-9b7e-29b6aece4776.mp3";
export const parvatM2Hin = "99041ffe-1d08-4d0b-8e89-5098feba42da.mp3";
export const bhindiM2Hin = "11779ffd-e004-49ee-841b-68e7d505feeb.mp3";
export const kulhadiM2Hin = "28fd5a79-8fcc-4a8e-b8e9-63e333f06180.mp3";
export const tyohaarM2Hin = "7d46625e-aa58-46ab-a66d-5bf6bd6aecf9.mp3";
export const kasratM2Hin = "69123bfb-7023-47ad-a78c-612b7d869efc.mp3";
export const shalgamM2Hin = "7b0be858-42fd-4929-8721-2b520b709c5d.mp3";
export const ajgarM2Hin = "ac50190a-f68c-47ef-a94d-ff03283e2d3c.mp3";
export const adrakM2Hin = "7ef1938b-e331-4bcd-9fb3-e723d4e0f436.mp3";
export const sardarM2Hin = "2a837910-9e4a-43b8-b768-c3eca3b1cb2b.mp3";
export const sharbatM2Hin = "4350c341-433a-499f-a69c-47554d24b128.mp3";
export const kathalM2Hin = "8f80bd2e-7e6c-47b9-8e24-695d4ea5ec0c.mp3";
export const tamatarM2Hin = "5f1acc5c-24a0-4548-a72e-a5d20e274de9.mp3";
export const girgitM2Hin = "2874528a-d652-45f6-b895-105a87a583d4.mp3";
export const tarboojM2Hin = "f114b1e1-fbd3-46ba-b63c-6dd6ec6a8460.mp3";
export const kabootarM2Hin = "96744cd3-b657-449d-851c-6f40d6ebe4c6.mp3";
export const nariyalM2Hin = "98f661fc-bb47-40ed-a630-0080375d5450.mp3";
export const chocolateM2Hin = "b9ccb17a-761e-4249-880d-a10c9422170a.mp3";
export const cycleM2Hin = "9d78947e-a869-45c7-8e2a-e6bf3361f4cd.mp3";
export const footballM2Hin = "729243a2-d668-48c5-9958-6f05bd78718e.mp3";
export const lahsunM2Hin = "1370431d-99b7-49dd-a953-44e487419833.mp3";
export const khargoshM2Hin = "b811d63d-ed15-423b-b6a6-54b6b96bad49.mp3";
export const phooldanM2Hin = "76f9e19b-8cfc-4834-9312-36a5533890af.mp3";
export const gilhariM2Hin = "e24376fb-a4eb-4598-80dd-4e87c057c7ad.mp3";
export const elaichiM2Hin = "cb408b5a-f8c1-47b5-be5c-900371fe0712.mp3";
export const kharboozaM2Hin = "f11158fd-d988-4f33-925b-ece8b88b2263.mp3";
export const battakhM2Hin = "d962cd1e-632d-4869-a25b-dc5c974c9e01.mp3";
export const pattharM2Hin = "a4dd5012-b5a6-42d7-8403-205729039dfc.mp3";
export const biscuitM2Hin = "954b471e-bf4c-45d1-ba3a-54f767cd8870.mp3";
export const kulfiM2Hin = "e5eccc19-4808-40ba-8ef1-338d7b9e0e0b.mp3";
export const bistarM2Hin = "e1f0ab40-a68b-4bf2-80f5-794db3811353.mp3";
export const prithviM2Hin = "6a80cc69-f678-41d5-be26-049f2fd11dd1.mp3";
export const shikshakM2Hin = "701b6cb0-a120-43c6-a9ac-2118c57fd268.mp3";
export const sardiM2Hin = "2ad08e66-3cd3-4d81-8fed-435e45d5263a.mp3";
export const chikitsaM2Hin = "1af41ce9-8aab-4589-8a53-65a03f5344d8.mp3";
export const murgaM2Hin = "78dc124c-20f4-4935-be19-2d6d1592a505.mp3";

export const YoungM1Tam = "bd0c06d0-c369-4998-b225-47c14310c99e.mp3";
export const blindM1Tam = "5b9d53ca-517d-434b-b513-b2403f5358a0.mp3";
export const SHOEM1Tam = "b7b2576d-d06a-462e-966b-e7e747a7bc9e.mp3";
export const sailorM1Tam = "9c3a4daf-61f7-4db2-9811-1da6cdf57ca3.mp3";
export const mushroomM1Tam = "cb1e6e75-1ef9-4a00-837b-f44f2ae7bb7f.mp3";
export const FoodM1Tam = "b5ce5427-6d74-4fd2-a14c-bedc9c5ba0c5.mp3";
export const RiceM1Tam = "aa1635a5-460e-42ee-960f-9a3b952f999f.mp3";
export const HorseM1Tam = "07aeefe0-483d-476b-8e36-f4bc1c292791.mp3";
export const MugM1Tam = "82c9a394-b7fd-47bd-b7a7-5f81cd74bda9.mp3";
export const CarrotM1Tam = "e700a991-bad9-4a21-bc67-3aece7938c67.mp3";
export const SquirrelM1Tam = "8fa6d507-9cdc-4ac3-9b17-85bb17997238.mp3";
export const PomegranateM1Tam = "9be5fdd3-b573-4d41-ba56-8e52f9b08e7a.mp3";
export const TREEM1Tam = "48e902f5-c63f-41ee-bb05-b99b76422850.mp3";
export const PeacockM1Tam = "3babad17-0c63-4de2-98a1-c39263a35375.mp3";
export const LotusM1Tam = "866174a4-8e56-4810-a1e3-0e132059661a.mp3";
export const SocksM1Tam = "db6ad99d-7bcf-43af-886a-07df7bc112a9.mp3";
export const SkyM1Tam = "80111429-928d-4a3b-ad64-1d695bc9636f.mp3";
export const timeM1Tam = "7407492f-2b13-4e67-b6bf-9ca6a9ac76da.mp3";
export const DoorM1Tam = "4de2d3ed-de51-4134-81eb-ef626c64c7c3.mp3";
export const WheatM1Tam = "61abb5e0-59af-4e41-8a8d-27b72472a1f1.mp3";
export const WolfM1Tam = "455a5577-2888-4f5b-b5b0-27dd8d249ba8.mp3";
export const angerM1Tam = "e083a04f-af0b-4d14-9c53-84826a9a0221.mp3";
export const RABBITM1Tam = "9011c035-a11e-4ca8-865d-8d2dbf6926e2.mp3";
export const CrocodileM1Tam = "e86936f9-2ddc-427f-810a-6f9d6c0130ab.mp3";
export const FingerM1Tam = "4b631e8f-f3ee-423a-8780-63e131bc8a50.mp3";
export const NailM1Tam = "45d7a636-1041-4ac0-a30c-f22c130f6310.mp3";
export const SareeM1Tam = "690e7e85-6a7a-4192-a578-22f96a43c393.mp3";
export const LampM1Tam = "d357755e-4d5e-49d5-af8b-a2a1e63b8d2d.mp3";
export const TeaM1Tam = "265b3e3f-78a9-4b93-9ecc-1ef921336b95.mp3";
export const FluteM1Tam = "16e18fcf-4d30-493c-b9bf-90bf6c7d831a.mp3";
export const wingM1Tam = "7d63f3c8-93ed-440c-ab12-70f80372786b.mp3";
export const STRONGM1Tam = "1e0c81c0-6b73-42e3-bf6a-f47a8b8edb97.mp3";
export const shadowM1Tam = "01ce12a1-f605-4a5b-99ef-c9b56684ee29.mp3";
export const rangoliM1Tam = "2aa048c4-47e4-4eeb-9389-fc15fde41f8c.mp3";
export const CurdM1Tam = "fa4a485f-a409-49cd-bdcf-3d562b8ac385.mp3";
export const CloudM1Tam = "f816c92b-1727-4175-9228-d5cee2108575.mp3";
export const hutM1Tam = "23a1a9ad-76d6-4fe5-b8fe-2ad0678ebd18.mp3";
export const necklaceM1Tam = "1c0333b7-b860-4f79-922a-02b1142a0c3a.mp3";
export const AxeM1Tam = "5f8c54a4-e714-4a24-998a-6691674b36e5.mp3";
export const RupeesM1Tam = "e8a0c8db-e779-4d26-9e0c-78395f50f5e0.mp3";
export const thirstM1Tam = "a1160762-6e6f-42f6-893b-acf600609591.mp3";
export const MONTHM1Tam = "1a8fce01-04c9-4bdf-98f6-4b132a79e0ad.mp3";
export const TapM1Tam = "d5ff1195-b9eb-40b4-ac05-6d2c78600d3e.mp3";
export const oceanM1Tam = "5dc390e9-5b60-4df5-81d7-19b452a465b1.mp3";
export const FaceM1Tam = "7ceb29a4-e7b0-473f-bc52-2a97b5d475a1.mp3";
export const stormM1Tam = "7d7a50de-0325-44d7-a2cf-9936b441b5e7.mp3";
export const BuffaloM1Tam = "56f7e660-942a-43df-be89-32f207395b42.mp3";
export const MintM1Tam = "a8e48b2c-48e5-494e-a51a-69b6daaef01b.mp3";
export const bridgeM1Tam = "8998715e-7dfd-4ade-a3bf-318b1613530a.mp3";

export const plateM2Tam = "cfa64d7d-c8c6-4f80-8800-ac0f7c0c9258.mp3";
export const toungeM2Tam = "d61b8fbe-e6fa-446b-9384-9025e938a451.mp3";
export const noseM2Tam = "089c86cc-e684-47f2-84c7-0d4717db81a2.mp3";
export const saltM2Tam = "1d8f4912-da95-405a-9d72-07ec42f34c80.mp3";
export const jamunM2Tam = "e9a9cc37-a50e-4795-866c-b3842f215c75.mp3";
export const eggM2Tam = "c6170deb-d7dd-47a2-8d44-206f2de73cbf.mp3";
export const chapathiM2Tam = "72d3fab6-262e-4c7b-9e6e-c6bf8942da7d.mp3";
export const knifeM2Tam = "ab968510-524a-425a-b0fe-e76fe472a663.mp3";
export const shirtM2Tam = "64a1a32b-5c49-476a-adfe-5bad2edd4976.mp3";
export const chairM2Tam = "80435c72-1743-4529-a6e1-0c388ec6a929.mp3";
export const threeM2Tam = "53c4030f-526a-4163-92e6-4f061fd92995.mp3";
export const snakeM2Tam = "0008afca-96ac-4e67-9c12-4f89b8a27c87.mp3";
export const crabM2Tam = "f61ad050-640d-4b4e-8d70-357041edb33f.mp3";
export const coconutM2Tam = "5fc3b861-21f3-4301-b2aa-120d92716595.mp3";
export const owlM2Tam = "53ed230d-930c-4f6d-9bbf-5d2839aa5d53.mp3";
export const busM2Tam = "fa6abcd4-43cb-4015-9df5-0a023dbc9434.mp3";
export const toyM2Tam = "400c582a-b10d-4ce7-a5ef-57443550bca5.mp3";
export const goatM2Tam = "368c3b3f-f84b-4f22-9cec-c018f1757a72.mp3";
export const combM2Tam = "33e850e2-9b44-466a-9341-9943a4196d26.mp3";
export const chappalM2Tam = "9ed75908-89cf-4029-8bb8-0b4ec8dd002c.mp3";
export const capM2Tam = "c3dbd5ea-53d1-4ac5-b6b2-14391b0cd3aa.mp3";
export const lizardM2Tam = "c513bc1a-7a93-477a-9d19-e5e0bacbef2d.mp3";
export const garlicM2Tam = "521098b7-358e-4d46-9046-529c5464b68c.mp3";
export const boxM2Tam = "b3da53cb-0794-48ed-b2b3-7b64550ae899.mp3";
export const blanketM2Tam = "b9ef916d-4c74-4baf-bf19-85ef4c68cad7.mp3";
export const cauliflowerM2Tam = "c8402255-5834-4cab-9fe5-3da02b8cdbe3.mp3";
export const fireM2Tam = "ebf95523-1e6a-4bda-9116-245c6cfd92b2.mp3";
export const kurtaM2Tam = "0b066d22-e155-424e-ba0f-ebeeb78a4f97.mp3";
export const foreheadM2Tam = "18a728f1-8baf-4ea7-ab14-ed786f522f59.mp3";
export const ballM2Tam = "b8a5c125-4a07-4f1d-b194-21a38fc24c75.mp3";
export const lockM2Tam = "9d2ad43e-6ac2-49d7-9321-10bf2a7ee13a.mp3";
export const stickM2Tam = "a9cfbc3c-60fc-4814-88b8-98c40d4bd67b.mp3";
export const craneM2Tam = "2c576d02-4f29-42b2-a6ca-7b368fb6c0ca.mp3";
export const butterM2Tam = "8c94989d-1949-48c8-a770-f1ce8fab8906.mp3";
export const cycleM2Tam = "19cd3fd3-8ba0-4adb-bc04-a6478b06867e.mp3";
export const bottleM2Tam = "707837ec-2ff2-4bca-a325-2f832c8886e9.mp3";
export const sweetsM2Tam = "abbea641-4020-48fa-8712-5895bfdb08c0.mp3";
export const kiteM2Tam = "e64770a1-ef07-4bb5-88cb-64f528912a1e.mp3";
export const neemM2Tam = "71c59e50-207f-4322-815e-0ab3fa16f4d1.mp3";
export const castleM2Tam = "eed6ae75-9bd4-4448-bc08-222e3c8f0166.mp3";
export const bearM2Tam = "0e1da3d4-6001-49e9-ac69-14ae28682b84.mp3";
export const nurseM2Tam = "c5b45b56-eb35-4bfb-a19d-0dc941925b31.mp3";
export const ladduM2Tam = "3585e02e-9d02-42c3-908b-e08d192decd6.mp3";
export const songM2Tam = "ce83e47f-51f8-43f3-8dcd-f33727e3aba0.mp3";

export const lotusM1Kan = "3afb6062-6a46-4e50-b935-c75e0690aec7.mp3";
export const spoonM1Kan = "6b43f304-017e-4b76-9733-1d93d6c5128a.mp3";
export const bearM1Kan = "cedc0ca0-d9ab-4b7d-aeb5-352641bd0dd6.mp3";
export const shipM1Kan = "4f5d8904-f78d-4a23-8b17-cb5ca67b87ec.mp3";
export const tabalaM1Kan = "013997cf-d98b-4297-b0d5-7ab88382e2eb.mp3";
export const singerM1Kan = "61b67250-6c51-49bb-b6ad-1d0670f1b4be.mp3";
export const dhobiM1Kan = "69897af4-9072-4291-b2a0-4f1f097938c7.mp3";
export const kingM1Kan = "6ff8cd85-b2ac-4042-9d12-463e5efe6c43.mp3";
export const mathematicsM1Kan = "bbb9faa2-9ddc-439f-b4ad-36a518858a62.mp3";
export const jackfruitM1Kan = "ab1b8642-b3fa-4271-9ba6-5ca6f9bc61e9.mp3";
export const boyM1Kan = "1fedcc8f-6c95-47f4-989c-cab60e53df53.mp3";
export const peasM1Kan = "0717fd43-e7af-4907-9b82-14aca7cf6fb4.mp3";
export const fishM1Kan = "15b3ecda-287b-4737-b66d-362d8fd1baac.mp3";
export const lemonM1Kan = "2311893f-812b-437d-873a-6de9594cc03e.mp3";
export const familyM1Kan = "d62fbd9a-146b-4753-8528-b231b88dcfc4.mp3";
export const humanM1Kan = "7655c12c-56ff-4da9-92d9-483af66cdee0.mp3";
export const vehicleM1Kan = "c4ed50eb-7ae6-43b4-999c-04108f014a8d.mp3";
export const cabbageM1Kan = "e9dff413-c8e2-431a-aab6-9d65dddbebb9.mp3";
export const earthM1Kan = "6030a754-ed78-4dc7-86d7-44557d116509.mp3";
export const coffeeM1Kan = "346264dd-ef02-44f3-93e9-4773bf4037cf.mp3";
export const gingerM1Kan = "121a1460-d53e-493e-b528-00f715dcdbe8.mp3";
export const goatM1Kan = "336c01e7-b826-42aa-b142-8f827f5d4ccd.mp3";
export const dosaM1Kan = "487c72ce-6b3c-40b1-a777-99ac1b5d6471.mp3";
export const deerM1Kan = "0c56a8fb-1995-4457-9773-6d5f4d94d65c.mp3";
export const tableM1Kan = "6657fad5-d32d-4fbe-9faf-294e3f760cee.mp3";
export const castleM1Kan = "2a0a9024-6af8-4ac6-9ff6-d3a925332221.mp3";
export const peanutM1Kan = "5aa6dc29-1653-4be5-b0a2-189f5d11baea.mp3";
export const shoeM1Kan = "c9fe57b6-64ed-4573-ad80-bc7c5332f9b4.mp3";
export const neemM1Kan = "7113239e-6f80-4b67-abe6-f8f51a8e1f1c.mp3";
export const owlM1Kan = "d385867d-42d4-4a49-83c2-af37c7de8917.mp3";
export const cucumberM1Kan = "2d7f44a9-f823-4755-a2e7-3c9f0ef406e4.mp3";
export const moustacheM1Kan = "e2c82699-c660-4fe2-9d03-d868d6d9ef00.mp3";
export const festivalM1Kan = "1a42ed7f-3241-4cf8-8daf-c82252964655.mp3";
export const ladduM1Kan = "8534576a-1c38-4d14-8c0c-12bdb261fff2.mp3";
export const eagleM1Kan = "82d9c04c-acb1-4094-a46d-0f3640cfa5b4.mp3";
export const birdM1Kan = "46c503af-2085-4b3a-9486-14da4e4ac0f5.mp3";
export const sparrowM1Kan = "cd2dec9f-c65e-4111-919a-455db042c853.mp3";
export const fruitM1Kan = "fa9f2e85-201d-4dd5-9f87-8fa451e38fe3.mp3";
export const limeM1Kan = "36040ec5-9f63-4e69-a393-b5e80fb82e56.mp3";
export const basketM1Kan = "5a6725ce-94c1-492e-9f61-559b51787f10.mp3";
export const sareeM1Kan = "683870f5-383b-47d4-8f53-670b4ce8f668.mp3";
export const guavaM1Kan = "33032461-184c-405f-a234-d44c20936764.mp3";
export const wheatM1Kan = "67626517-6ccb-4259-9575-658120ab9dde.mp3";
export const umbrellaM1Kan = "7a8cf3c0-feac-44ec-ac27-2b5e2fc0aecd.mp3";
export const foodM1Kan = "a7c86135-65aa-437c-a193-9820dfbb98b1.mp3";
export const skyM1Kan = "7fb56edb-3078-4898-b33d-8a740f2c83c5.mp3";
export const teethM1Kan = "85284c4a-757e-417d-b0d7-fc30554ef681.mp3";
export const angerM1Kan = "c0a464f2-9b50-453e-90f2-7f4f0d203282.mp3";
export const frogM1Kan = "4a5b1379-cba3-473e-985c-fb0bef2d1009.mp3";
export const saltM1Kan = "b312ae1f-2f28-41f6-ae75-59ea2bfefa77.mp3";

export const clockM2Kan = "0c8a47db-a085-4bfa-b0bc-ac85b5a27d44.mp3";
export const vegetableM2Kan = "9f259c91-12d8-4323-8d0e-5e54e99cccce.mp3";
export const winterM2Kan = "91ae0575-8b79-49f7-a450-555590c6ff40.mp3";
export const kiteM2Kan = "88a97989-082b-4e6c-8d85-942a88d04ad7.mp3";
export const hutM2Kan = "dd0e86a8-ba76-47e9-8799-fb9c5aa0e78c.mp3";
export const necklaceM2Kan = "ecdd10d4-2b1f-4a2f-9653-2ed9f38a92d8.mp3";
export const hibiscusM2Kan = "d5960011-9b42-4f9f-bea9-74619411712a.mp3";
export const pigeonM2Kan = "48d79fda-8197-4f5d-a7fc-c98a1813fd10.mp3";
export const pineappleM2Kan = "3a4b9285-205e-4073-87a4-232343df8bb0.mp3";
export const sweetsM2Kan = "5cd430b3-1af1-44e4-b14c-b450e01b4344.mp3";
export const scissorsM2Kan = "cfda2652-9deb-402a-a844-ede077a21233.mp3";
export const donkeyM2Kan = "1d4f466b-94db-4a1b-9787-58371355f454.mp3";
export const onionM2Kan = "716311b9-5836-402c-b9d3-9a710016b851.mp3";
export const papayaM2Kan = "de367ff4-cf78-4e87-9a84-2ac3954999e9.mp3";
export const woolM2Kan = "9ba34c0f-34e5-48b0-aa48-0d1241bf87d5.mp3";
export const chocolateM2Kan = "bf0a9957-2258-4bb6-8184-af39c1d65de7.mp3";
export const butterflyM2Kan = "8f9ad22f-9b57-4e2e-9660-b0e869baa1c6.mp3";
export const rotiM2Kan = "c5a797ff-18e4-40b7-8a0b-5fa4dfea00b3.mp3";
export const catM2Kan = "55fc8479-45d1-4fed-acc8-f79f77335e7d.mp3";
export const duckM2Kan = "3f7452cb-4835-4da4-98dd-a5b5028d1fd8.mp3";
export const woodM2Kan = "357b4024-951f-4403-8ff6-f322f33c0d15.mp3";
export const butterM2Kan = "7b07c982-1333-4976-8d3a-7ac690501ecb.mp3";
export const eggM2Kan = "1468d3ef-9103-4d05-8859-8068b59c2547.mp3";
export const mosquitoM2Kan = "f5f3f98b-f69b-40c3-8efa-a7ed6bbd928d.mp3";
export const watermelonM2Kan = "1e2d9473-1346-40b5-9220-2f92daae7b6d.mp3";
export const jasmineM2Kan = "c5e3c0d2-3abf-4682-a65e-9e4fb1c16f88.mp3";
export const cycleM2Kan = "1a82b6ef-5e02-488e-a272-9ec8a23cf995.mp3";
export const doctorM2Kan = "9c4d4d23-1595-4269-9e48-cbec33bc78d8.mp3";
export const hammerM2Kan = "852316be-5e34-4b5e-a941-11a8bc165219.mp3";
export const bananaM2Kan = "bbd0be11-74c3-444f-8184-7b3f852a6a0a.mp3";
export const mountainM2Kan = "9df9c89f-134d-41e7-b113-a89419ab859c.mp3";
export const danceM2Kan = "d6b922c5-7763-44a9-a383-f64d2de3a4da.mp3";
export const manM2Kan = "a8b96946-ba5f-467d-b1e2-4a0caade9a3d.mp3";
export const barberM2Kan = "da6a8934-1c07-4808-97d7-d8f8abef930f.mp3";
export const zebraM2Kan = "18a0b953-81e4-4e03-9cf6-6dbd9338220c.mp3";
export const scooterM2Kan = "e323e4ef-8af0-4bbd-ba70-bdc0c7086f7c.mp3";
export const bookM2Kan = "93374d9f-5461-4c24-b33e-c19213bf683c.mp3";
export const muscleM2Kan = "11abe543-cabb-47f1-904f-24180ab876c1.mp3";
export const teacherM2Kan = "215f6877-c39a-41dc-bed5-cb434bfa7ace.mp3";
export const animalM2Kan = "44031ffd-1eeb-41c9-ba4f-2e8dec8b78e1.mp3";
export const chairM2Kan = "b8fa518d-6a31-4306-aac0-bb6811db787c.mp3";
export const scientistM2Kan = "a8907195-6ef2-4a5c-989e-2514f50132b7.mp3";
export const watchM2Kan = "f22552d6-f85b-4562-9f67-f65e56c612e4.mp3";
export const carrotM2Kan = "6fc73288-02b9-4419-b186-1d96ecce176c.mp3";
export const garlicM2Kan = "8ef481e3-d9be-41a9-8a76-40b7eb81faf9.mp3";
export const sunM2Kan = "659175bd-59ea-431a-915f-5986759ea6ec.mp3";
export const brotherM2Kan = "483134bf-08e3-496c-8bb9-0bda719fa39b.mp3";
export const prizeM2Kan = "cfb42fc8-f694-49cf-a204-1fac180c4003.mp3";
export const almirahM2Kan = "bcfa235d-804e-4eef-9cfd-cc112ac1ce22.mp3";
export const rawbananaM2Kan = "f8790636-5595-44f8-b40d-9185a13e06d0.mp3";

export const musicM2 = "64c8eac8-592b-41db-9fea-1a8ca9ec29c4.png";
export const utensilsM2 = "ff6b3b54-43b1-4393-b6e5-bcf96ee47fc6.png";
export const dragonflyM2 = "a21e88ed-14a3-414a-a7f4-a9479cbc5598.png";
export const textbookM2 = "d77dd2e2-5cf1-459e-a523-6e1623d0bfad.png";
export const monumentM2 = "4a4813c7-fe58-4bfe-b659-4477e8697de3.png";
export const chairM2 = "8a779c01-e311-4031-8c6d-8f55cba17c43.png";
export const chocolatesM2 = "4b9d1b02-8126-45b0-be6e-36af966c8b85.png";
export const branchM2 = "22c858dc-f59f-4718-beed-e774612a057a.png";
export const beachM2 = "11eea642-0b83-4a9c-acbc-e48d687b60ec.png";
export const mouthM2 = "acaf16fd-23ba-4862-b63f-460980549745.png";
export const cloudsM2 = "0ab16d6b-74dc-4dc6-a5c1-75f41f98adca.png";
export const thinkingM2 = "d247f5b9-9905-4646-8bd4-a4d822c9329b.png";
export const teacherM2 = "61fab058-db6f-4509-8773-6e1522330c63.png";
export const mouseM2 = "1283717f-329b-48bf-8700-6257256fd2da.png";
export const stichM2 = "fdfe3d60-7f00-4202-b2f6-9057a29d3277.png";
export const brothersM2 = "bf8043af-34df-43fd-93ce-6f7bd9239a56.png";
export const goodbyeM2 = "1b913f23-60e6-42cf-b1d5-5a54a8b4f12e.png";
export const clownM2 = "7059fd0c-615b-4a70-8858-7a8bf51f85c4.png";
export const handkerchiefM2 = "ad99bff8-100b-4dc7-b66f-4ded9ba56875.png";
export const aeroplaneM2 = "4979f23d-92ea-4638-8a9d-b9c8472dd6e9.png";
export const kitchenM2 = "da5366e7-d0b0-4871-a2d2-f1bed46927c9.png";
export const jackfruitM2 = "a2667eb0-9fdd-4fa6-9be1-47a2c59061a9.png";
export const teethM2 = "9a750e96-06ee-4b3b-9608-6043bfb78b74.png";
export const notebookM2 = "6e8720e3-02b3-4ead-b3be-495e79776061.png";
export const joyfulM2 = "1bda7bdf-1696-42e5-b0d2-13bfb403dc21.png";
export const flowersM2 = "549977b5-fead-4973-8f06-51636a0da257.png";
export const curiousM2 = "ad404dae-b9a3-4510-94d6-61d7122cee63.png";
export const sandcastleM2 = "141f1ceb-096d-4792-8132-88458aac5f36.png";
export const earthM2 = "af1aac98-4015-4a9a-99d1-8878d32a3452.png";
export const drawingM2 = "34fb65d2-02d7-4dcb-bc89-9a9d5bc4f7fb.png";
export const womenM2 = "1632e900-9ca7-463b-9495-afda3c4f6af6.png";
export const warriorsM2 = "d75e3270-1923-4c3a-86a5-20baa937def1.png";
export const footpathM2 = "00288ff4-817e-4ca6-8152-ee8ddae2ec86.png";
export const oilM2 = "ebded0f6-72ef-46c7-8fa7-a2e650a8b8ef.png";
export const mountainsM2 = "aa1f7b17-4238-4775-948f-403c3333e1e6.png";
export const sugarM2 = "8372cfad-0877-43ff-8cd7-6984338a94bb.png";
export const lunchM2 = "806e8cc2-40d3-4777-bd01-a60b39c7dafc.png";
export const championM2 = "c3b96dd8-b579-46c6-b2bf-4e9bd931b2b2.png";
export const bookM2 = "693dff89-f305-431b-9e82-554c6290a165.png";
export const grandfatherM2 = "15df4eb1-99a5-486a-b659-c2596bdd2ffc.png";
export const houseM2 = "39f93d76-074a-4f3e-b102-237bd737c97d.png";
export const sproutM2 = "f140a48e-59e4-4788-882d-d9a59a6856cd.png";
export const soundM2 = "8eba7cee-4519-4aff-8d90-ad71015ee4e0.png";
export const mathematicsM2 = "2cfc23f7-d711-4b55-86b3-24a7e9e294a7.png";
export const cheerM2 = "cf30e665-0d5e-4c05-880f-fec32682db46.png";
export const lecturerM2 = "ceb80c7e-dc7c-47f4-a1af-ed99208b9fec.png";
export const clothM2 = "2ff40487-6c5f-4275-8d7b-7d34bc62c902.png";
export const cookingM2 = "2c2f1937-0408-4a93-854e-8fea73ccbac1.png";
export const woollenM2 = "e3c34987-d70a-471b-8bbf-08e41e224284.png";
export const cherryM2 = "7f3a3cf0-0751-4d95-98d2-a06b4076e53f.png";

export const mobileM2 = "d8799cfb-9bde-4dd0-ad50-c6ffcea74996.png";
export const bandhagobiM2Hin = "4642dea7-069e-4e6a-904e-2c3ef51ec0c0.png";
export const mirchM2 = "e0f83204-bdb9-4a5b-97c0-8d727d308635.png";
export const masjidM2 = "74a50c77-a544-4761-a2a1-005368ab91d1.png";
export const mumfaliM2Hin = "5549c4ac-83f8-477f-84da-01c0b56ce2b9.png";
export const maccharM2Hin = "be25a3b3-2732-4401-bba5-6c3e534f7bfc.png";
export const doctorM2 = "a4af8885-846a-4940-865b-4589543f37fb.png";
export const khelkudM2 = "b81d85e1-81a6-4000-9c5b-0b2d5214308d.png";
export const pushpM2Hin = "6424033c-5bc3-44af-bcd2-ada2e2259a72.png";
export const scooterM2 = "662d6e8b-8328-49d0-9677-6367b0c22600.png";
export const circusM2 = "19a0a9c3-5514-4d62-a010-9cae0743b27c.png";
export const helmetM2 = "612abaf8-c1bd-4b30-834d-03f124ffa299.png";
export const gubbaraM2 = "c8ca8547-338b-40d1-88b5-a5cdcaa20210.png";
export const krishnM2 = "208da779-e458-467a-b69d-df620f913939.png";
export const basketM2 = "5460df24-8c10-4e37-90a3-a1f135b5d656.png";

export const threeM2TamImg = "7d83081b-c8b5-4ada-9794-6e5adf3f0d9b.png";
export const capM2TamImg = "1d7242bc-a2b0-4686-a5d2-3c0fda4d200b.png";
export const combM2TamImg = "713ee6c3-db71-46dc-a81d-a90614024189.png";
export const busM2TamImg = "b960bb84-63c6-48ec-ae36-b224295996ab.png";
export const shirtM2TamImg = "2d34e4bb-e88e-4522-8feb-3863e916c5d7.png";
export const saltM2TamImg = "c5d729a0-85e5-4c3e-90ff-d86ede54a16b.png";
export const chairM2TamImg = "52e0380a-2d09-4654-8592-1ab8a6f2ac7a.png";
export const chapatiM2TamImg = "0fd4315c-65f9-4120-a68c-a5d75995c454.png";
export const jamunM2TamImg = "e40165ff-6e0e-4081-8136-269d85af1535.png";
export const goatM2TamImg = "0eb2f6f8-1fc3-4ce1-b64b-137c75b763b2.png";
export const eggM2TamImg = "c346b4bd-3dc2-4f39-bb04-f48fa82d1067.png";
export const snakeM2TamImg = "c2fe59c1-ca54-4113-9fb9-eb5fff7247eb.png";
export const crabM2TamImg = "69ebed8e-445f-4d00-968f-348d712bf7da.png";
export const knifeM2TamImg = "da501f4d-9bce-4bc5-b636-9e4d92b19e85.png";
export const toungeM2TamImg = "e287b028-eabb-4a83-b96d-293aa90db034.png";
export const toyM2TamImg = "5ff5da83-6d45-4262-9511-a31a48cf842e.png";
export const chappalM2TamImg = "f005cf57-96d4-4975-bb46-3100b99402fa.png";
export const owlM2TamImg = "edc8e66a-9fd1-41b2-b056-83ce961e9ae4.png";
export const noseM2TamImg = "ccb1c596-9961-41d1-b7a0-74aa16ffafff.png";
export const plateM2TamImg = "a1fb35e0-4456-4d6d-921d-b407957b5889.png";

export const duckM2KanI = "abf67bb2-3e2e-45b7-af16-379d3dbdae7a.png";
export const hibiscusM2KanI = "c1b25b55-c152-4a5c-bb87-ffd196c0fb5e.png";
export const necklaceM2KanI = "87d440ff-2cb6-4a56-a62a-9053b447ccd2.png";
export const pigeonM2KanI = "2f988989-207a-4acf-83ba-843921a1fe91.png";
export const clockM2KanI = "5adee007-622c-43b1-85ed-4e4b3945ec86.png";
export const butterflyM2KanI = "57f9e497-aba4-4ff1-99ac-e03c7f463faf.png";
export const chocolateM2KanI = "349f01cc-e971-4314-8361-c22f7a59f483.png";
export const kiteM2KanI = "30eb72f5-86f7-476f-9069-5b0b88541b7c.png";
export const hutM2KanI = "4857d2f9-94d1-4434-9753-232ee20fc30f.png";
export const woolM2KanI = "95e4f6d2-8773-4faf-bfeb-2c12a61a3d20.png";
export const sweetsM2KanI = "fdcb537f-1773-4240-b623-a300f649aace.png";
export const winterM2KanI = "265a55f9-06d8-4879-85b8-9fa87cbe2dcf.png";
export const pineappleM2KanI = "54efaa1f-64f4-4428-92c1-4720f97a6dbc.png";
export const papayaM2KanI = "fe3186b6-8fad-4b55-b2b8-af8bd325501a.png";
export const vegetableM2KanI = "320abdf5-4597-49e7-bd7f-b672bd4856d5.png";
export const rotiM2KanI = "536fb8e4-f899-4b3b-82b3-bb06a7c4f1a9.png";
export const scissorsM2KanI = "67d40819-e8c7-4a28-87d4-831505ce5114.png";
export const donkeyM2KanI = "52e8bdd6-803a-4966-91f9-019c0638c86f.png";
export const onionM2KanI = "83453e5c-b7c2-4986-97c6-82c8229054c0.png";
export const catM2KanI = "f2c3a920-fad4-42de-959d-d1601c21fe62.png";

export const cucumberM2TelI = "987d5c3a-930d-4dc5-bf00-fd72cc09a459.png";
export const pickleM2TelI = "3a3207a2-e8f8-4eab-9203-894ed33bd9a4.png";
export const winterM2TelI = "d6fdeb11-6966-4bcb-b75a-f5538e4ef35c.png";
export const peasM2TelI = "d3c7ebbd-021f-49b3-9dac-16ca9f299d6a.png";
export const teethM2TelI = "381f2f1c-ce60-4ae5-a5c5-9faa75958ed1.png";
export const noseM2TelI = "1c45986c-e18e-4c67-be8d-ba610a466e62.png";
export const eyebrowM2TelI = "d20e78d9-4a77-4596-aecb-dccde6667410.png";
export const eyeM2TelI = "f95ab407-ca4f-4a79-a445-6e057321e7bc.png";
export const treeM2TelI = "1d362b1a-ecab-4bb4-a903-1b0278cc1093.png";
export const humanM2TelI = "f390a5c3-7a74-4b8f-a8ba-4030afa6983a.png";
export const keyM2TelI = "b1a91d62-29c7-4cc4-9ec8-48e1f9c5c8e2.png";
export const soldierM2TelI = "2eafe8ec-6890-40e6-8341-c85e2e910eeb.png";
export const spinachM2TelI = "93761217-75a8-4204-94f1-7c9312e62732.png";
export const watchM2TelI = "a76b4ea9-184c-41e9-972c-5bea67e7901e.png";
export const authorM2TelI = "764c50c7-1d74-45b8-b7cd-0fd8021adb3b.png";
export const shirtM2TelI = "d86beef1-5808-4894-95f4-19fb238f5bb8.png";
export const honeybeeM2TelI = "ffb1bb71-d68c-41db-82e4-52ad42a69e1f.png";
export const hairM2TelI = "3555e8ed-a3a8-4a15-98a4-c13346919126.png";
export const kiteM2TelI = "40053019-a603-4601-927f-e27bd8bd7b62.png";
export const rangoliM2TelI = "55b1bd48-e425-4198-bd13-6e8085530d29.png";

export const authorM2Tel = "0e42f88e-1f99-411d-9f4f-1fb1ea8393d2.mp3";
export const kiteM2Tel = "c4643035-14d8-4f9a-afc7-7356ef899b1a.mp3";
export const winterM2Tel = "cedf0903-a16f-4dfc-9038-99298701203f.mp3";
export const pickleM2Tel = "0bd428a6-49b7-4e8f-ae99-acef075350dd.mp3";
export const watchM2Tel = "3ba89d22-17c5-4034-9272-9a3b1c3f05b7.mp3";
export const spinachM2Tel = "4b92420f-0034-497e-b5cf-7f6789d3c0ba.mp3";
export const peasM2Tel = "a2c2db2f-3fe0-46fc-8897-8dee417aa2d6.mp3";
export const eyebrowM2Tel = "743f55e8-11af-41d0-b4cd-1592722d074f.mp3";
export const cucumberM2Tel = "4e48e013-da76-46d7-88bf-0736e942d319.mp3";
export const humanM2Tel = "6deeb3d1-d27f-478b-9652-76f72e836b3a.mp3";
export const soldierM2Tel = "f700e758-3680-4365-9b20-ed54bdd6b9bb.mp3";
export const keyM2Tel = "4a1131d2-b80f-4077-981e-e1a6dea198cc.mp3";
export const rangoliM2Tel = "63ff33d7-a539-4f94-8c9a-d86e7fc75524.mp3";
export const eyeM2Tel = "9ee1a090-d543-4fb9-8467-bdcba11a1095.mp3";
export const hairM2Tel = "8d13ccb8-9542-4d26-a4b0-37c7254f8128.mp3";
export const treeM2Tel = "4ccccfd3-5a20-4d22-9baa-93fc3faeb67f.mp3";
export const honeybeeM2Tel = "ca3bc186-4f18-4144-b697-6ca628a9eda2.mp3";
export const teethM2Tel = "68e5bf20-cd43-4e1d-98c4-2afb5f0c768f.mp3";
export const noseM2Tel = "bebc1c9a-d5c0-4df3-a1a3-936b55b75401.mp3";
export const shirtM2Tel = "7dc050a3-c11d-49b9-b5ab-3aed381ca34c.mp3";
export const catM2Tel = "81b30e91-b36c-4923-bc60-6af36386d6b9.mp3";
export const axeM2Tel = "a6560157-d006-473c-bc36-66e6070a534f.mp3";
export const figM2Tel = "d16fdc1a-0b2f-4254-8328-eb01dacd79e8.mp3";
export const coconutM2Tel = "498e7710-8323-4601-82de-ccb5aa740650.mp3";
export const limeM2Tel = "8aa221d9-de98-4859-8263-472b1c94a44d.mp3";
export const hammerM2Tel = "7bf7d8a9-6479-4346-9fef-56a7a753154b.mp3";
export const cockroachM2Tel = "2a062aa3-d949-478b-960b-ad06bb96a319.mp3";
export const skullM2Tel = "c916d9db-0ecd-457c-baa0-2e40fae7c546.mp3";
export const batM2Tel = "ba367898-1099-4ef0-b67c-7343a21a189a.mp3";
export const birdM2Tel = "5a842888-7df0-487c-a4eb-25b41b1332e3.mp3";
export const papayaM2Tel = "cecb6334-3026-46fe-8dfb-b0d2842ab6ee.mp3";
export const potterM2Tel = "a11d3dc9-7fd4-4124-abcf-caa81b09adbb.mp3";
export const chocolateM2Tel = "ac60799f-8712-4e1c-9fe0-5fda95616ba4.mp3";
export const onionM2Tel = "02e50d6d-a5c7-4dc9-8fb8-a37caf9c898b.mp3";
export const zebraM2Tel = "d5a4f722-76fe-4ab3-bd2f-8df35242ca0b.mp3";
export const pomegranateM2Tel = "255b91b1-9270-42d6-b379-6a590b170096.mp3";
export const shopM2Tel = "d3f653e1-b946-4b46-89e5-9b5beaeaec85.mp3";
export const painM2Tel = "bae38409-4d5c-435d-ad75-0c2e628bd281.mp3";
export const riceM2Tel = "6db5d640-fd4d-4c94-b14c-a8d431439e97.mp3";
export const combM2Tel = "02ac0450-6e1e-4b5d-b37d-dd29c1f844d3.mp3";
export const cuminjeeraM2Tel = "070da9fb-15a1-4a68-a52e-afdd898317eb.mp3";
export const swingM2Tel = "2810a0d1-497c-439e-a43e-1b348c2a15cd.mp3";
export const sheepM2Tel = "b2f5a48e-771c-4183-8df8-d93fa4cbbe65.mp3";
export const vesselM2Tel = "7092878d-3007-4c2a-a78b-b8556e6cd1dc.mp3";
export const scissorsM2Tel = "45f01d3c-7dd4-4ffa-852f-8ef270097bf6.mp3";
export const boyM2Tel = "32f54861-59a0-4cfc-82b5-f87d484dffa6.mp3";
export const jasmineM2Tel = "ef600108-d7b7-49a1-8a1b-acac217e554c.mp3";
export const swordM2Tel = "f8f605f4-525f-4563-8f52-0d3bb7bbb150.mp3";
export const boxM2Tel = "9ac9d28b-40d9-496b-8190-ebc4702b2800.mp3";
export const butterM2Tel = "6078fa9e-0291-4088-ae26-e6e1e10f56bb.mp3";

export const peacockM1 = "45af6441-33e2-4ba4-9846-aa483b18fc42.png";
export const spiderM1 = "b6f5fe61-1979-4da8-bb02-bc9b087b41c1.png";
export const appleM1 = "36474075-ca35-48d5-9fbb-91f052dab02e.png";
export const familyM1 = "110ade94-2ad0-43f3-a916-6440f633e338.png";
export const plantsM1 = "5d0bf26e-02b8-4930-832a-88b0a7da9bf7.png";
export const vegetablesM1 = "78b68b99-eec7-4179-90c5-a2fe95064913.png";
export const spoonM1 = "9911ad6b-e5c4-46fa-99d1-a5dbe97db3a0.png";
export const glassM1 = "46be265a-8f56-4692-b2b5-b15bd7c4b1b5.png";
export const zebraM1 = "99cdded7-8484-453c-a290-c54655b2a396.png";
export const clockM1 = "5aceb92c-eac3-4e6d-94da-0fb950394b69.png";
export const grapesM1 = "8c9d5d97-082f-433a-9552-d4b551208d55.png";
export const monkeyM1 = "76fd5a14-d9c1-46f2-a627-f0a81bb6d992.png";
export const tigerM1 = "82b86c0e-bc9a-4277-87e9-b7845b319fa5.png";
export const horseM1 = "59e34b82-db3f-43ca-aac4-d23abf12c303.png";
export const puzzleM1 = "d9cca661-3f75-4f3f-843d-29c66c7dc56a.png";
export const potatoM1 = "8615fdd0-77d9-4240-87d2-1ee60648ea79.png";
export const dustbinM1 = "bb6c881b-bb1f-48c6-9a39-78e1de88b068.png";
export const doctorM1 = "1d2e5bc4-ae2b-45e3-8792-88e1fef334b8.png";
export const happyM1 = "e6ed0e2a-9ca7-42f8-8187-4a2cfe939e08.png";
export const bananaM1 = "d863e5f9-eec2-436a-a325-387ab7c8e2b0.png";
export const numberM1 = "1083c5be-5a48-411f-8c70-d38fbb2e4c45.png";
export const pencilM1 = "e58792d4-3dbf-4741-ad8e-4c3f6b3aa214.png";
export const puppyM1 = "1490dc9f-818d-490e-90ef-5abf7c419b86.png";
export const animalsM1 = "b7e91a4a-0eb2-459a-af21-4c65060a4bc8.png";
export const tableM1 = "d66b78b4-d54f-46b1-8931-bfbfe849df49.png";
export const basketM1 = "a1f58546-f555-468c-967e-e40478065034.png";
export const coconutM1 = "75f34af3-1424-47ca-8b0f-aebdd8e22836.png";
export const turtleM1 = "2053bb2f-a7d8-4e8e-ac67-18cac5996442.png";
export const moneyM1 = "10fb3fb2-5740-475f-b69a-640fe0e9d823.png";
export const phoneM1 = "83fac552-3f9a-4192-8ba0-2a9a48a3aad5.png";
export const keyM1 = "46e0b37a-1fb2-4b9e-b54c-10af524300bd.png";
export const windowM1 = "9b1cee19-1307-48e0-9312-37ab90195402.png";
export const kitesM1 = "67d7c188-cd01-45a6-9e49-32dc8e5744ef.png";
export const lionM1 = "f95617e7-13cd-4c2b-a772-a464112f7b14.png";
export const tongueM1 = "d74b5941-e6f7-4818-b0bd-957e897272a6.png";
export const balloonM1 = "94ba8064-2648-4c7b-805a-29ccd7acead4.png";
export const fruitsM1 = "411aa45b-e7dd-4cee-ad02-ef3b429b55d3.png";
export const cardsM1 = "a4f55144-9d1c-400e-b071-08ec5ea0a0f2.png";
export const mangoM1 = "5534c477-2246-4568-906a-32d1db9e239b.png";
export const elephantM1 = "57bf8b3a-ea97-4391-b9db-5e3efc70ff08.png";
export const cameraM1 = "428bb1f4-883c-4ede-a6b0-57fa05d47e49.png";
export const dragonM1 = "c9d1c0db-93b6-4994-9b0a-60a5891acebf.png";
export const stonesM1 = "f9a8f456-e692-4934-a775-041f0bbcfc83.png";
export const bicycleM1 = "ed506ed2-53c2-4986-a6b9-6efc521272ca.png";
export const wheelM1 = "c8b23b74-5039-47e5-adea-e73d5939be51.png";
export const orangeM1 = "1d3f3f0f-ee22-435b-b3a9-bca354cb7161.png";
export const handsM1 = "bebf3d92-d2fd-4950-b3df-96f6027aaf44.png";
export const sleepM1 = "2c09fee5-e815-4279-a9ed-738d60923672.png";
export const tomatoM1 = "20c862e9-a098-4040-a5a7-c562752829e8.png";
export const calendarM1 = "d2ce49e1-275b-4c24-9c31-70e293820963.png";

export const turM1Eng = "cb7656ee-e9da-4708-81b0-84b1dee12842.mp3";
export const tiM1Eng = "a6d379bb-1faf-4c7c-9ca6-4b2d80389e70.mp3";
export const cilM1Eng = "ed7b7ba6-28f0-436c-ad68-df90fda25c7e.mp3";
export const binM1Eng = "1eef7a04-673f-458d-9eda-8993ffdd26e1.mp3";
export const derM1Eng = "fb2cba27-e8e6-4a90-8d7d-84c4c06a983e.mp3";
export const angeM1Eng = "75cc150a-e8df-41a1-b8e3-7cd93e206625.mp3";
export const ketM1Eng = "5c6c3601-0170-4699-ab17-5a16b588faa2.mp3";
export const pupM1Eng = "9ec1d90e-0df9-4706-8dcc-490d464fde61.mp3";
export const puzM1Eng = "9381e935-c06f-4bd9-814f-874657d85740.mp3";
export const naM1Eng = "c170b4f8-daba-426c-99cd-8ffb1c2000c6.mp3";
export const orM1Eng = "052d6884-686f-45d8-8289-891a808ee6a3.mp3";
export const zleM1Eng = "18f891b2-1afb-4f3f-aa1b-179d97f2d4dd.mp3";
export const eyM1Eng = "44942599-d204-44da-ae24-e1aef3f56ce4.mp3";
export const apM1Eng = "aba19291-30e8-4d8c-af8b-80075ef4ec23.mp3";
export const pleM1Eng = "1504599e-1653-4002-8b50-7e4eac4083f7.mp3";
export const pyM1Eng = "bf6ee3b3-cf1d-440b-bba5-082feff67a1b.mp3";
export const balM1Eng = "923e0233-8e28-40d7-9e6b-b00116fc8e94.mp3";
export const baM1Eng = "eec95e5a-d626-4598-acb4-2122edacbcdb.mp3";
export const basM1Eng = "122fd87e-1ddb-43ff-9356-848e187948e9.mp3";
export const monM1Eng = "da76f1f7-b02f-4cf0-bdd3-0e05f84e2a17.mp3";
export const spiM1Eng = "7a42df44-3882-47fe-aa8e-9cceabac3bbb.mp3";
export const torM1Eng = "199f29cf-bb04-458a-a1b8-07efbb5a1116.mp3";
export const dustM1Eng = "35199934-5d30-4a65-a5cc-21e33f27bb17.mp3";
export const docM1Eng = "762329a1-33ef-4346-b970-7f55d2ab8c0b.mp3";
export const taM1Eng = "8dfe96da-4cde-4734-ae0e-f7da6ab7e6c2.mp3";
export const numM1Eng = "6df0b04b-0a3d-436f-a90d-37b109777b29.mp3";
export const dowM1Eng = "1a184f9e-3773-4efc-85a1-779415546846.mp3";
export const hapM1Eng = "b87ccf64-641d-4dd4-9ce4-c9911df0d72d.mp3";
export const darM1Eng = "cdd64441-9c26-47ee-ba98-40c651ec99be.mp3";
export const berM1Eng = "774a6bfb-d7d8-4b30-98f7-5682dc1cc4ea.mp3";
export const tleM1Eng = "8785a554-29b1-47ca-bac3-01a0ed5e7868.mp3";
export const enM1Eng = "5b57f081-a54f-4ccb-b6e2-a30ca62c97f4.mp3";
export const winM1Eng = "d96783bf-367a-45bb-a8af-ee129edebe24.mp3";
export const coM1Eng = "1015927a-1f2c-46f9-b388-9cb7b45b0655.mp3";
export const bleM1Eng = "7dfdfb3a-25e4-40c4-bb43-49b2d2aaca96.mp3";
export const gerM1Eng = "3aa8dd4a-4e75-4d90-9549-25ed316e5a3c.mp3";
export const penM1Eng = "e08f283a-4076-4a92-9657-bd824d86de0e.mp3";
export const nutM1Eng = "3128ea51-4ba9-419e-ba67-8d84a87c567f.mp3";
export const calM1Eng = "46b2d52e-54af-4e72-b6ea-94dffbf8e68c.mp3";
export const loonM1Eng = "aa20d377-d29b-4215-8df0-1364fd216c33.mp3";

export const damruM1Hin = "9051dc45-9e9b-47b1-80f6-7aaaff9768a0.png";
export const chawalM1Hin = "8b8f5051-9475-4bb8-bb6e-a8d0eddd7131.png";
export const matkaM2Hin = "3b516a29-ac06-4ee8-8356-d37ca3dfda21.png";
export const matarM2Hin = "20b72564-3f6b-4dc8-8175-2a050f7b19fa.png";
export const teacherM1HinI = "5bfc4162-cab1-492d-a789-f79025201dc5.png";
export const kalamM1HinI = "1767bd34-da71-40c0-ad2b-b2cb0db31eae.png";
export const acharM1Hin = "6dfbda63-938d-4443-b0f7-2c0585f8a87f.png";
export const koyalM1Hin = "f4ea2a07-1376-4d6c-8242-36fa6be6e5cd.png";
export const kadduM2Hin = "6caba7ed-7e28-4289-8660-5e8528a40f2f.png";
export const takiyaM1Hin = "54c74222-08f0-449d-8ca6-99b9e5ce95d1.png";
export const banarM1Hin = "e68a7b67-7b23-4b33-adb4-babd6cccb3c7.png";
export const santraM1HinI = "c9cf9d50-803b-488c-a4eb-d86c67ca6a49.png";
export const botalM1Hin = "7796805a-26d5-4ff3-acb2-46c57f12ebab.png";
export const tablaM1HinI = "bf8ce2a0-54bb-4e4a-9700-9dd491496799.png";
export const badalM1Hin = "a5c31562-f9ef-42c2-a3cd-78420f0c9dcb.png";
export const bakraM1HinI = "80a31b2d-091a-4b3a-94e7-335c9e0dc123.png";
export const palangM2Hin = "415dd628-31ab-4720-ae29-7bb630580567.png";
export const mandirM2Hin = "29b7757e-c1b3-4f9a-8fc9-cd9d8d2a871b.png";
export const gajarM1Hin = "772308c7-8a38-45b3-9860-748aceeda682.png";
export const langurM1Hin = "19f14bf2-75b7-4d75-adc4-7c8025c1beca.png";

export const baaM1Hin = "d52a9a61-58fa-46f8-a433-d10e02d882f4.mp3";
export const dalM1Hin = "c702eb08-1843-4209-b1fa-c2af9a454e83.mp3";
export const tabM1Hin = "b81f34ad-7c03-4f7e-af5d-ff924d5a3428.mp3";
export const laM1Hin = "669a3adf-57a9-4ebd-bfbe-5d71a1ff7fb1.mp3";
export const chaaM1Hin = "1a9ab41e-299f-499f-8d3e-04794d6417b4.mp3";
export const valM1Hin = "54e8f170-adc7-4a93-bdc9-d2058ed1c5aa.mp3";
export const koM1Hin = "e17f8268-2736-4bae-9c1d-15f97715eb16.mp3";
export const elM1Hin = "6e256eff-ae04-4954-815b-98170f4eace1.mp3";
export const kaM1Hin = "0d065cdb-8f09-455c-b542-6a0ba2770d77.mp3"; // Duplicate key warning
export const lamM1Hin = "13d8e204-a068-4cff-a520-2e68928a7054.mp3";
export const maM1Hin = "50ccaf98-c509-4399-b32f-4df900f3d37b.mp3";
export const tarM1Hin = "85c98ade-0397-4e74-ac7b-d3450783db85.mp3";
export const paM1Hin = "a938f3f1-2f07-4898-afd8-30a470f4fc71.mp3";
export const langM1Hin = "ee347edf-a512-4263-b63f-14d5704e59d4.mp3";
export const matM1Hin = "681f3652-7a4c-4608-862e-c67f8baf81b6.mp3";
export const ka2M1Hin = "2a465a3f-ef0f-49c1-a0ff-d944dd4c2b3a.mp3"; // renamed to avoid duplicate
export const manM1Hin = "5729298e-387e-41a9-818c-c788dea63b7b.mp3";
export const dirM1Hin = "260c70ee-64e2-4e94-bdaa-d119edec8164.mp3";
export const kadM1Hin = "176c6acb-fe1c-4d0a-b6fd-0043e01e7b90.mp3";
export const duM1Hin = "176c6acb-fe1c-4d0a-b6fd-0043e01e7b90.mp3";
export const sanM1Hin = "676953f1-83a5-44ee-9ae9-4c817f9d0afd.mp3";
export const traM1Hin = "89284dc7-6255-446f-8ec4-67285924e6e8.mp3";
export const botM1Hin = "96e5f0a6-72f6-4525-ad73-135320e20768.mp3";
export const tleM1Hin = "0a637fcb-d1ca-43de-af6d-9b868f9310f6.mp3";
export const bakM1Hin = "e5708886-b28e-4462-acf6-e8136069c12a.mp3";
export const raM1Hin = "fb788fa9-f0d2-4141-9e12-32771c9ed2f0.mp3";
export const aM1Hin = "08f33113-c893-499b-baf1-001eba6173fb.mp3";
export const chaarM1Hin = "2563dd65-e5a4-4e3a-bba8-f57e93f5bf3d.mp3";
export const dumM1Hin = "f8906141-3243-4ada-b5e4-0ddecd9343d2.mp3";
export const rooM1Hin = "33e85072-4684-418f-ada8-9b26074ef1a1.mp3";
export const taM1Hin = "0b51bfd4-6421-44d7-bcf5-2722dd947144.mp3";
export const kiaM1Hin = "32091b92-4626-46db-8ef1-43d44150aac3.mp3";
export const teaM1Hin = "46bda69b-620c-4c4f-9f8e-d1e0d1f07885.mp3";
export const cherM1Hin = "bddbce71-759c-46db-bdfc-5caced9566dc.mp3";
export const banM1Hin = "f2032df2-a6f5-48d5-80f8-dd891bbc609b.mp3";
export const darM1Hin = "9e4a5443-ec51-4785-9672-734289418c80.mp3";
export const lanM1Hin = "db98749a-fb8e-4f1e-966b-4d8f6ccda120.mp3";
export const goorM1Hin = "94876f1a-65b4-4eed-97a7-82175cd031e9.mp3";
export const gaaM1Hin = "b3301559-9179-488a-b023-6a208c71d896.mp3";
export const jarM1Hin = "27ca4d45-f05e-4ea5-a967-adb1d4733fc2.mp3";

export const doorM1Tam = "aa897eb6-4ed1-49c3-90d8-bd5d44ca23cf.png";
export const mushroomM1TamI = "3229529c-a304-41f6-86d1-f02174d9c203.png";
export const riceM1Tam = "b38e9ce0-fc71-4340-8c8c-a29c5b514c56.png";
export const socksM1Tam = "59b2e4c4-e75a-4fde-9bf2-5d7205cbaf1a.png";
export const treeM1Tam = "fb67a709-a547-440c-bc52-9ef8a56265a6.png";
export const pomegranateM1Tam = "cee967c4-36f6-48e4-ae54-e217d65e9899.png";
export const foodM1Tam = "6ce228bf-2da4-42c2-b469-d97a98a32eaa.png";
export const horseM1Tam = "78df6371-9379-4c13-b615-ef3ab3cb4697.png";
export const shoeM1Tam = "8c54e54b-36f2-4af9-a56d-9ebdbd410271.png";
export const timeM1TamI = "243a1938-fb68-4ef3-bdd6-1cd6f22445a1.png";
export const squirrelMTam = "f955d547-8a67-4c92-8496-3a50db7099ed.png";
export const peacockM1Tam = "26f01c4e-215f-4e27-bc1b-eaa7134e00ea.png";
export const blindM1TamI = "d566e3d0-77f8-4074-83a9-9e9a4e3508a9.png";
export const skyM1Tam = "39f08af4-0d46-4982-b13e-7b608efcc1b8.png";
export const mugM1Tam = "361ad958-120e-45ad-bd60-8df60c7bdd91.png";
export const wheatM1Tam = "f4d9ca84-6392-48bb-a8fe-a488d2cc0798.png";
export const carrotM1Tam = "69a482b8-be50-4b8e-aa8d-e3c2cc451322.png";
export const sailorM1TamI = "8b287776-0b44-4688-947e-7fdf1086e2bb.png";
export const youngM1Tam = "e22ca0fe-fdc6-40dd-821d-d0500ded3c35.png";
export const lotusM1Tam = "45b88a14-dcbb-4e8d-aa4a-8929cd74f6fe.png";

export const time2M1SylTam = "acc5f376-2c33-4092-a250-e74a440173ea.mp3";
export const blindperson2M1SylTam = "40e7935c-572b-4a02-a1e6-04aedb44d9c9.mp3";
export const sailor3M1SylTam = "e06e9603-3e26-40d1-a530-f1ab72a1a4d9.mp3";
export const youth2M1SylTam = "28d4b146-538e-4444-bff0-46a8a3b93938.mp3";
export const rice2M1SylTam = "206098e5-7a91-4980-90ef-c9f3a6f6fc39.mp3";
export const wheat2M1SylTam = "c110a77a-5f43-4bc3-a436-6fa56e152059.mp3";
export const lotus1M1SylTam = "006da4fd-bb37-46b4-b006-c1b8bd43b6eb.mp3";
export const pomegranate3M1SylTam = "834535d0-0f17-4f4b-969e-6514920fe385.mp3";
export const horse2M1SylTam = "e543856b-8d81-436d-9159-3523b798c123.mp3";
export const door3M1SylTam = "dc2a1904-bc4b-4285-946c-0ae701357c7b.mp3";
export const tree1M1SylTam = "67f65ac3-9ad9-4b41-827f-add27755c352.mp3";
export const peacock1M1SylTam = "42cbf647-7de4-4c65-9db7-961f9df62bd0.mp3";
export const tree2M1SylTam = "20669005-7710-4e92-89c6-be1a0851fdc6.mp3";
export const peacock2M1SylTam = "c87aea80-b7d0-44c4-bf06-26ddf49e1839.mp3";
export const sailor5M1SylTam = "36f17205-5cb8-4e1a-839d-9dcb188a9ae2.mp3";
export const horse1M1SylTam = "c769aedf-a687-4edf-b068-10c5fd2c46e5.mp3";
export const lotus2M1SylTam = "8d62d669-0957-4a6f-8bce-2b8328bbda23.mp3";
export const wheat1M1SylTam = "c11b3af8-9398-4331-9c61-8f03e8189d17.mp3";
export const rice1M1SylTam = "c4a3cc50-247e-4027-8954-3014372919ed.mp3";
export const food3M1SylTam = "ca04f4b1-16a1-4b02-a59a-16dad5f6cd38.mp3";
export const sky3M1SylTam = "7472b739-897a-4966-98cc-f66a1bb391b5.mp3";
export const shoe3M1SylTam = "9473e74e-a9ad-4d7f-818d-246f1cc9d62e.mp3";
export const youth1M1SylTam = "65b09d0e-a880-4b8f-a1a9-fe2692009cb1.mp3";
export const blindperson1M1SylTam = "e39706e4-bbbb-4b7c-81a5-dd07ca67e6db.mp3";
export const time1M1SylTam = "0d41d8f7-00fd-4608-8e5c-4148d41e94f2.mp3";
export const door2M1SylTam = "3005baec-a55d-4fe7-9cb3-4d800abce74c.mp3";
export const horse3M1SylTam = "8f630550-47c4-4d69-a037-9864ed7f65ab.mp3";
export const pomegranate2M1SylTam = "94ba2aca-b3ae-4e94-8922-394380dae80d.mp3";
export const mug1M1SylTam = "97060d1c-e03e-4ba2-858d-0bba245e4098.mp3";
export const food1M1SylTam = "74ba1e86-cd4b-490a-a28c-e0a0946bc389.mp3";
export const shoe4M1SylTam = "ee43797d-69c2-449a-9065-c733971f3ae1.mp3";
export const rice3M1SylTam = "e7f2980d-d1ba-4426-928a-93eb2a95d9dd.mp3";
export const wheat3M1SylTam = "b21a05e0-1b3a-461d-9dce-047d3f8d87bb.mp3";
export const sky1M1SylTam = "acb5ea66-b39d-4dc0-8217-f0ab05c74989.mp3";
export const squirrel2M1SylTam = "e8bcd856-eb1d-4eff-a317-1af8dc1bd175.mp3";
export const wolf2M1SylTam = "960b775e-5aaf-4848-aae4-e380e6588f8a.mp3";
export const shoe1M1SylTam = "26c4fdc6-630b-4943-b3c3-40bb5604f06c.mp3";
export const carrot1M1SylTam = "e3435555-e30c-468a-a6e9-819176f0bcdc.mp3";
export const sailor2M1SylTam = "ef23fc5a-2074-4b61-aa83-e726310a6678.mp3";
export const mushroom1M1SylTam = "236a84fd-3ae1-4a7d-9b70-058ff7d2d417.mp3";
export const mushroom2M1SylTam = "fd0209bb-404e-4648-b6ff-9acd9aa03332.mp3";
export const sailor1M1SylTam = "06f905dc-bd69-438b-b35f-ad3771d4507f.mp3";
export const carrot2M1SylTam = "7c746185-dd28-493b-aa84-2ec94f04ff9d.mp3";
export const wolf1M1SylTam = "b5907cbd-fbde-4071-839e-5369b62692ef.mp3";
export const shoe2M1SylTam = "5573b710-8ba0-4f2b-973f-401e2ffcfaf0.mp3";
export const squirrel1M1SylTam = "f5ddce0d-7d2a-462b-979f-e4bb5d530bd4.mp3";
export const sky2M1SylTam = "0d1b1d1d-2db2-452d-9478-73b86aaf20ad.mp3";
export const mug2M1SylTam = "25cee6f9-fca6-498c-a7f0-2b1a192c3ba4.mp3";
export const food2M1SylTam = "2ca688d5-220a-442d-bf50-bf1ed7dfe28f.mp3";
export const lotus3M1SylTam = "8a7ddb5c-ac21-4d2c-8429-a52cd793cb88.mp3";
export const pomegranate1M1SylTam = "07bdced8-c4b8-49a3-b793-9c5938f01206.mp3";
export const door1M1SylTam = "85b66b4c-cccc-4b2a-887c-3cf387e79307.mp3";
export const sailor4M1SylTam = "d30ad8f2-6019-4208-821b-307a3c5a3db1.mp3";

export const vehicle2M1SylKan = "6c55256f-ded9-44bb-a64e-bf5cad108105.mp3";
export const lotus1M1SylKan = "f35ede6c-d179-4b26-b873-b805e80b3cb4.mp3";
export const lemon1M1SylKan = "3b1874c7-6cee-4031-9c08-8cec00bdbea4.mp3";
export const family3M1SylKan = "9debddb0-9a50-4b34-964f-65ae3e08318c.mp3";
export const spoon2M1SylKan = "a8e9c541-e000-4970-a546-19e92b51f227.mp3";
export const king2M1SylKan = "e0832e16-d88d-432e-a002-4a4dafc28e62.mp3";
export const boy1M1SylKan = "b5755731-597a-4d0e-8219-5ee3688596df.mp3";
export const singer1M1SylKan = "1ffe1acd-e189-4e91-8de8-40a65472d2f7.mp3";
export const tabala1M1SylKan = "ee793e5a-1a73-4109-acbf-ac8170f68e87.mp3";
export const washerman2M1SylKan = "ac352cd1-260e-4c3c-b4a7-669d7b1b3d10.mp3";
export const ship1M1SylKan = "ff09ccf5-0539-4e2a-a69a-91fe33d34d95.mp3";
export const mathematiccs1M1SylKan = "4567687c-8db7-4ad3-ab78-a840139fd82c.mp3";
export const ship2M1SylKan = "a6dc743e-15cc-4574-9ea8-d1ea1e9cb50b.mp3";
export const mathematiccs2M1SylKan = "1d162fd8-1be5-4957-8c7b-660d44b75215.mp3";
export const washerman1M1SylKan = "ee92fe80-9d6c-4349-a137-4b5a9e829203.mp3";
export const bear3M1SylKan = "b007d1ee-6d82-4ed6-b6d4-28a07cd7a698.mp3";
export const peas3M1SylKan = "5f5c1cbc-a167-456a-b2a0-0dedfa9c7b2e.mp3";
export const jackfruit1M1SylKan = "5769f251-da31-42c0-97b2-aa697d28042f.mp3";
export const tabala2M1SylKan = "4882d72d-091d-4f3a-8f2e-8c6d99bfd43a.mp3";
export const singer2M1SylKan = "aec240df-4bd2-4f1d-81e8-82f63f63afff.mp3";
export const king1M1SylKan = "d2274d26-7d1a-48b0-9fac-c2c8a423fb84.mp3";
export const boy2M1SylKan = "4d1f641e-3c5f-4816-9fff-e33eb572327d.mp3";
export const cabbage3M1SylKan = "3af381b4-ab10-4448-a30b-bd12645edaaf.mp3";
export const spoon1M1SylKan = "c599d0bc-0a8a-42e6-9914-7519cffed8de.mp3";
export const human3M1SylKan = "d2247793-5dfa-41ad-bde4-386edee45037.mp3";
export const lemon2M1SylKan = "4c9eea1c-766d-499f-8251-108bf12a2a35.mp3";
export const lotus2M1SylKan = "9fb68d1d-10a6-4129-a74e-0f3dc17b7db0.mp3";
export const vehicle1M1SylKan = "951ea057-6910-4216-a05a-39e34f913a30.mp3";
export const washerman3M1SylKan = "898fc8ac-2e6a-4d2f-8c40-55e29ea7cbb8.mp3";
export const bear1M1SylKan = "03742a21-7988-4c72-ae0b-fb38b37ac524.mp3";
export const peas1M1SylKan = "943a301b-c878-4465-98b4-bc52f3d25840.mp3";
export const earth2M1SylKan = "c64ba931-da8d-441f-850c-4d30e7742195.mp3";
export const fish1M1SylKan = "8e5cc28b-521a-4e0b-ae06-259b46d63f8e.mp3";
export const jackfruit3M1SylKan = "20c0bc38-1270-4d57-977a-95760e81bfe7.mp3";
export const cabbage1M1SylKan = "65f95867-c793-4732-a286-55303c368fcc.mp3";
export const spoon3M1SylKan = "32249960-68e9-4d1b-bd54-ae1c16794a67.mp3";
export const king3M1SylKan = "8467df63-73c6-4c4b-9e85-55b861477937.mp3";
export const family2M1SylKan = "001575b3-99cf-4221-a331-c05b39d622ea.mp3";
export const human1M1SylKan = "5025dbd0-e10f-4e88-9105-432323aa1e93.mp3";
export const coffee1M1SylKan = "8aab85e4-e1ac-4d91-bac8-3a80d9019836.mp3";
export const vehicle3M1SylKan = "c6439609-177c-4bc0-b722-b474dd48bf16.mp3";
export const lotus3M1SylKan = "fb39292d-7f29-465c-ba34-2cc3cfddc087.mp3";
export const coffee2M1SylKan = "70bb856e-6bb8-4175-b12b-22aa99b5b567.mp3";
export const human2M1SylKan = "0bcd1126-c9dc-4f05-8b76-320d2c1db1c1.mp3";
export const family1M1SylKan = "49f1253a-81ea-4f2b-98f1-67958fa8a052.mp3";
export const boy3M1SylKan = "7838b942-8ec1-42d6-9d54-d8b60847adc6.mp3";
export const cabbage2M1SylKan = "8ec331db-4ab4-42c7-986e-ef871722fe74.mp3";
export const tabala3M1SylKan = "1657d09e-2e41-4f77-a0ff-dda9f78b6a5b.mp3";
export const fish2M1SylKan = "1aedd69b-8df9-4962-aa71-e839f4fbfc12.mp3";
export const singer3M1SylKan = "0c5f9348-a0a4-41a2-a0b4-c4de7d0d78e1.mp3";
export const jackfruit2M2SylKan = "9e85eb06-89c9-46d4-9c94-bd0eaed86be8.mp3";
export const peas2M1SylKan = "37fa8611-82bd-4062-84fc-62d1c561ff7c.mp3";
export const earth1M1SylKan = "33cb4310-4634-451f-a893-0af42c004cea.mp3";
export const bear2M1SylKan = "7284a405-5405-4407-bc80-823dc0ddeed4.mp3";
export const mathematiccs3M1SylKan = "5d91a942-6e6d-4f79-8e78-7649c544b685.mp3";
export const ship3M1SylKan = "fed6dbaa-d518-42db-b8bd-39f270124481.mp3";

export const singerM1KanI = "93463bfd-83e2-4ff1-a572-4a6618ae5fcf.png";
export const mathematicsM1KanI = "ccba50dc-f915-476a-8051-edc4d1c8aa33.png";
export const boyM1KanI = "6e72fd11-0923-4b65-b468-a7b40d7b9f0b.png";
export const peasM1KanI = "57a493f1-b1a1-45e2-beb1-b8bb5e0de458.png";
export const coffeeM1KanI = "a2f62e14-fc36-4625-94ca-efca74d294d9.png";
export const fishM1KanI = "2fabac09-4170-451e-a671-cb2b0fd999fc.png";
export const shipM1KanI = "6c7e4122-3704-436c-82bb-6195b61cf8da.png";
export const humanM1KanI = "66806f76-ad23-43f1-8893-328a8e09b456.png";
export const familyM1KanI = "a505128b-ba14-4fb5-bd73-d4e236a9152c.png";
export const tabalaM1KanI = "ab05f9ae-f242-4852-9266-1ecd1395af85.png";
export const cabbageM1KanI = "a1358a86-f743-4756-bc62-8801ad43120c.png";
export const jackfruitM1KanI = "ce0ef22b-2a76-44e4-8279-99c5fa60c88b.png";
export const vehicleM1KanI = "aac29147-bb76-4f47-a453-2ef7f8d0dd03.png";
export const lemonM1KanI = "f7d969c7-bb42-4fa1-9572-5eb6bd937327.png";
export const bearM1KanI = "9381278f-7543-44e8-8515-13d1f89f2722.png";
export const lotusM1KanI = "5733edee-1aff-43d4-bb6a-a1a0217f5094.png";
export const kingM1KanI = "359115b6-d29b-42fc-9e38-2103cdb9bb24.png";
export const earthM1KanI = "a969c176-6b68-4215-8a74-458a3ea055d7.png";
export const dhobiM1KanI = "bdfbcc05-c8b1-439e-98f3-7b272cbaf13e.png";
export const spoonM1KanI = "a696c167-772d-4e63-90c5-fa0481fe2057.png";

export const ear2M3Tel = "704c3a8d-62c3-48a7-bbc8-c88f7fc0c480.mp3";
export const squirrel3M3Tel = "a41b153c-0078-407e-8049-fe7cb9a49fb2.mp3";
export const squirrel2M3Tel = "348a9b8d-8e6c-41ff-84ba-71a56ddbb850.mp3";
export const lotus1M3Tel = "a8603b09-5016-40c5-86dc-b7a3f764153d.mp3";
export const sparrow1M3Tel = "b749b149-be2e-4efa-b41f-a5f2181ccf2a.mp3";
export const jackfruit1M3Tel = "aa9a32c8-1157-403a-a49c-b43d177886fb.mp3";
export const door1M3Tel = "a0751c39-508e-4e77-a92b-b022ef0b9a20.mp3";
export const rat1M3Tel = "1a9d7ea4-b9a1-4121-ab2b-c3be2c505f51.mp3";
export const donkey2M3Tel = "a9830e59-942f-4535-95df-edae5139987e.mp3";
export const donkey3M3Tel = "0e9c0e63-a7a8-431e-a956-485e2cc25094.mp3";
export const spoon2M3Tel = "73474b3e-3f39-4fa2-bc23-fe7091fd8fad.mp3";
export const tongue1M3Tel = "985fb9c8-6031-489e-910f-22a5c97d152f.mp3";
export const hand2M3Tel = "b2b31ea8-fce2-458f-90cb-603ff41848cc.mp3";
export const parrot3M3Tel = "149647b7-522e-4fb4-acfa-45a1c5061649.mp3";
export const parrot2M3Tel = "e0537af3-4ee9-431f-b337-2d85b48fb449.mp3";
export const jar2M3Tel = "da375497-9548-4888-adbb-694e271c7cff.mp3";
export const banana1M3Tel = "38b53e9c-a4fb-4c0b-bfab-a9ebc662eb61.mp3";
export const kangaroo3M3Tel = "f6d7c9a7-85f8-4f0d-aec2-f99f134da118.mp3";
export const kangaroo2M3Tel = "86455c82-477b-4ce2-81bd-2c72bcb56df7.mp3";
export const bottle1M3Tel = "ba56a9b8-ade1-4a6f-b289-d103fda2bdc5.mp3";
export const earth2M3Tel = "8ec80ba1-05aa-4306-87e5-f923ca1b4fd4.mp3";
export const ring1M3Tel = "c403bd6f-8157-4561-bcf1-6c7e4fc85e1a.mp3";
export const boat3M3Tel = "72fd6b19-8471-44c9-8c7b-d9df83eb0ef2.mp3";
export const boat2M3Tel = "78466969-723a-47a5-a8a2-16d579676271.mp3";
export const roti1M3Tel = "c52c029d-7cff-422e-b347-4e3cddb7c81b.mp3";
export const door2M3Tel = "a457b0cc-aa4f-4086-9c14-0ce0806e3e98.mp3";
export const door3M3Tel = "a6c7d02f-e899-4844-913a-006fb54538dc.mp3";
export const rat2M3Tel = "a8bff18e-381e-4649-abac-8da3f1759b8e.mp3";
export const rat3M3Tel = "6972d339-4a36-4c0f-9bb2-ec4b1a34f2fe.mp3";
export const donkey1M3Tel = "fc8f6fa6-c048-413c-b426-6c2824fadaf7.mp3";
export const spoon1M3Tel = "c07c44e7-bc8d-42e3-863d-524687ec82ce.mp3";
export const jackfruit2M3Tel = "1bd8fccf-206b-4de3-a13e-8d3c2d75dc27.mp3";
export const squirrel1M3Tel = "a9b64100-8c30-476a-8cfb-c21f27e0218a.mp3";
export const lotus3M3Tel = "464e3768-d8ae-4826-939c-caad11d779dd.mp3";
export const lotus2M3Tel = "71b2f14e-738e-4f06-bee8-dbaf331a5e32.mp3";
export const sparrow3M3Tel = "abb5b3df-542f-4c77-984b-50e9670c6881.mp3";
export const sparrow2M3Tel = "dbec7d50-b136-48b8-a9ec-ff0bba74e64b.mp3";
export const ear1M3Tel = "573a2dac-c04d-459e-8ac7-ff88a023e336.mp3";
export const ring2M3Tel = "676e2e19-03d1-4b2b-81e3-8b3c651f385c.mp3";
export const ring3M3Tel = "a268d35d-2046-4ad1-bced-b4a140211ff5.mp3";
export const boat1M3Tel = "6cf4051a-6665-48b5-b432-f6466c048533.mp3";
export const roti2M3Tel = "39c0cad9-825f-4742-b5ad-47a81c9c3822.mp3";
export const banana3M3Tel = "2454b586-4b9c-4166-bdd8-6b75c1fcfbcb.mp3";
export const banana2M3Tel = "21aa3e4f-33a6-4a8f-ae05-b153b8cb5cef.mp3";
export const kangaroo1M3Tel = "28c4c537-f42a-4b61-8ed5-22160bc866a9.mp3";
export const bottle2M3Tel = "13fabfdc-32fd-46e6-83f7-bfaa68ec59a8.mp3";
export const earth1M3Tel = "b21b63a0-cf48-4637-94ce-30861a642ef0.mp3";
export const hand1M3Tel = "8da920f2-dd4b-43be-9ef4-41f64b56002b.mp3";
export const parrot1M3Tel = "5f48ed96-9ed1-4816-9445-d1aefd3da994.mp3";
export const jar1M3Tel = "222b2a89-810f-4074-af82-301d4f59e005.mp3";
export const jackfrui31M3Tel = "491bf916-4be5-472a-b8a2-02f38d565ed0.mp3";
export const tongue2M3Tel = "4e956907-27d1-451b-a9be-9243a490cb8b.mp3";
export const tongue3M3Tel = "417e26c5-5a9d-445d-8f6d-38002591b724.mp3";

export const jackfruitM1TelI = "890aede0-6dfc-46c4-9ec9-d0416eb98b95.png";
export const jarM1TelI = "814ff70a-4661-4e77-aa3e-ea721e2bedfd.png";
export const ringM1TelI = "38b1e680-b954-4d10-94dc-3a4574663ee2.png";
export const squirrelM1TelI = "fad903e8-172e-4d66-a990-6f017f40fd11.png";
export const spoonM1TelI = "f9c90e5a-fa29-4b61-ab4b-23f414a3929b.png";
export const earM1TelI = "59bb0940-beee-4b53-81b7-a215bb1ed4ad.png";
export const earthM1TelI = "3f69d55f-b111-4b48-9fe9-675793df8bff.png";
export const boatM1TelI = "204c7b28-a1c5-463a-852b-52614d9cdb3a.png";
export const kangarooM1TelI = "cb90859f-a33c-4043-8d38-4bcd767a258a.png";
export const lotusM1TelI = "ca721a5a-e7b8-4e22-84f6-9c8f85932a4c.png";
export const handM1TelI = "71e103df-7308-4965-ade2-05bd59574782.png";
export const doorM1TelI = "22c21888-c41c-4cc8-8bf9-a737b23e9ed7.png";
export const parrotM1TelI = "a3405509-9be0-458b-8667-2cb528f03591.png";
export const sparrowM1TelI = "b5af1bd8-e52d-4577-b282-f03d840d858f.png";
export const rotiM1TelI = "9d40958e-ebaa-4a39-b3f6-0fc47a52edca.png";
export const bottleM1TelI = "6e18e472-a184-4f26-aba5-d828de3920c8.png";
export const ratM1TelI = "ff4cc3ca-c695-4fa4-8267-8d7c7a4f715a.png";
export const bananaM1TelI = "cc33afa5-b1db-4f20-8f3a-e606c7888aa0.png";
export const donkeyM1TelI = "bf9d6ceb-72d8-4996-a840-526d27356726.png";
export const tongueM1TelI = "cefeb03b-1f13-40e6-ad03-e7a8bd03a693.png";

export const jackfruitM1Tel = "ac269441-83d8-4d91-af4f-8f2e9a4a0ae6.mp3";
export const squirrelM1Tel = "1be5ac02-46f4-46f2-81a4-5f096e2188dc.mp3";
export const ratM1Tel = "4b127121-1408-472a-80f7-acdd1090ac6a.mp3";
export const boatM1Tel = "90a7350d-5133-478d-b725-67021262a298.mp3";
export const ringM1Tel = "0a716855-a880-4c76-96c2-bc05d30e9ada.mp3";
export const bananaM1Tel = "0e984888-387d-46b2-8047-fb5571f77ed2.mp3";
export const donkeyM1Tel = "4455d2b1-da01-4a6d-a8ac-8dfa2b15f2a1.mp3";
export const doorM1Tel = "ad65c463-34ce-4c1a-8726-f5d00e59548f.mp3";
export const parrotM1Tel = "2dccff3f-9e2c-4b67-a12e-60ddab0f9cfc.mp3";
export const sparrowM1Tel = "0d074bb5-58c8-4dc8-8bae-9c02c378cc36.mp3";
export const lotusM1Tel = "19ba1e2b-1ae1-4cd1-a6f7-369871cefa20.mp3";
export const tongueM1Tel = "1c54116a-7aeb-4c40-af02-b58b46b7f720.mp3";
export const kangarooM1Tel = "235d494e-2648-4db1-b22b-d857345adbc0.mp3";
export const spoonM1Tel = "3e8a3af3-706b-48f9-8e68-85b0b96a7a28.mp3";
export const earM1Tel = "5bdd1d40-52c1-43d2-bb89-df90af0df6e6.mp3";
export const handM1Tel = "f4c423b2-d6da-41ee-b727-e4462663fa99.mp3";
export const jarM1Tel = "6fa88fc3-1814-4096-bb9a-c0d8407929d7.mp3";
export const bottleM1Tel = "1ba71eaa-4785-4171-8123-953b267a2592.mp3";
export const rotiM1Tel = "8b0def90-496d-4dc0-a711-ea75eafc50a3.mp3";
export const earthM1Tel = "f1ab0592-f998-4851-a9a9-c42a50f9373f.mp3";
export const eagleM1Tel = "94827a18-7c74-4a56-8369-b8e7d219f834.mp3";
export const basketM1Tel = "f0b37a14-0e6a-4433-be15-268326282b18.mp3";
export const soapM1Tel = "b3f77b8d-6548-4f53-bb63-e68890593732.mp3";
export const frogM1Tel = "cdda66f0-84f1-4a8c-b1d8-568afb470ce1.mp3";
export const dogM1Tel = "343d5aa9-7b65-442d-a575-61904ab0ddf5.mp3";
export const tableM1Tel = "44a564a9-3cf7-4e51-922c-107751fd6aea.mp3";
export const eggM1Tel = "4a4b5195-fcb7-4752-8337-1eb7dfc47204.mp3";
export const cloudM1Tel = "e6a30347-1bb8-4ff5-93e3-98af3b1eba65.mp3";
export const saltM1Tel = "147e0a4d-26f7-4dd0-8311-3d436fa247d2.mp3";
export const plantM1Tel = "adbbda0b-4886-4bf7-926d-97d0c1cbca21.mp3";
export const fireM1Tel = "4e288968-2eb9-4391-ad8d-b955c9f7d1c4.mp3";
export const knifeM1Tel = "37637ad0-97aa-4f31-9cc5-6fd49cc2e140.mp3";
export const horseM1Tel = "26712bc4-2d12-4752-b7b5-d1f25ff9735b.mp3";
export const flowerM1Tel = "bc1c61c6-a94a-4b65-98fc-55a271b947a9.mp3";
export const gingerM1Tel = "5394062e-c842-4756-a5e5-413a8e244fa7.mp3";
export const rangoliM1Tel = "b9bb1078-f875-482e-b48a-48e2dde6cd15.mp3";
export const gandmotherM1Tel = "a4d03c75-7fa7-4e0b-8dd0-6f888827f195.mp3";
export const busM1Tel = "d6a06e7e-db37-4013-b965-a258fd7c78f6.mp3";
export const drawM1Tel = "87d9db06-961d-4beb-ae35-a457e5c9b9bd.mp3";
export const boneM1Tel = "6973c2c9-df61-4be2-89c5-e48f0fa5ea1c.mp3";
export const brickM1Tel = "b5238a9d-d3a8-4501-9da5-86723f34f758.mp3";
export const festivalM1Tel = "f0e6d15c-088f-435f-b11a-533f3f80e5d4.mp3";
export const blanketM1Tel = "cc730f2f-c0e5-42f3-8238-f5aa81bd7813.mp3";
export const boltM1Tel = "c3ce1a2b-e2d1-4ee2-b777-64f8c290be32.mp3";
export const dhobiM1Tel = "1f0b2330-c802-443e-9a5a-a90d39cedbff.mp3";
export const grasshopperM1Tel = "9a22899b-2bef-449c-ae6f-ba4abb6dbf06.mp3";
export const capM1Tel = "d83f205b-2c33-46c7-a0db-e6af8d0f26e0.mp3";
export const grassM1Tel = "083f1ace-2347-4fec-8e57-2f0de95ab476.mp3";
export const ladduM1Tel = "e99e2fb7-1c05-41f6-b822-940851d00320.mp3";
export const laughM1Tel = "4b1f0aa1-2186-4c08-bdd2-cc00f4dc5b9e.mp3";

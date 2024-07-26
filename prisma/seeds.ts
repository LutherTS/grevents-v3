import prisma from "./db";

async function seed() {
  console.log(`Beginning initial seeds...`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Creating users data.`);

  // NOTE: DO NOT TOUCH SIGNINEMAILADDRESS. IT'S USED HARD-CODED.

  const usersData = [
    {
      // “me” / LePapier
      signInEmailAddress: "l@l.me",
      hashedPassword:
        "$2a$12$7IgXH7ORHd4x5O7.VC5LROJJFMq620II9ESleuMIYs.6KNDAsEYAe", // LePapier
      username: "LePapier",
      pseudoname: "“me”",
      // First name and last name criteria
      firstNameAnswer: "Luther",
      lastNameAnswer: "Tchofo Safo",
    },
    {
      // Alice / Alice-chan
      signInEmailAddress: "a@a.com",
      hashedPassword:
        "$2a$12$uePHXFQIZxmEqAyvU74txewChLSQsnYt6zvf0m2ad7pnO0ORvRwh.", // Alice-chan
      username: "Alice-chan",
      pseudoname: "Alice",
      // First name and last name criteria
      firstNameAnswer: "Alice",
      lastNameAnswer: "Perrini",
    },
    {
      // Bianca / Trovounette
      signInEmailAddress: "b@b.com",
      hashedPassword:
        "$2a$12$LxyeiZiFQ2t2m7rODda9B.O171J3GPuva77qfCLCSAUhZ60EWTFwW", // Trovounette
      username: "Trovounette",
      pseudoname: "Bianca",
      // First name and last name criteria
      firstNameAnswer: "Bianca",
      lastNameAnswer: "Trovò",
    },
    {
      // Candice / Candi
      signInEmailAddress: "c@c.com",
      hashedPassword:
        "$2a$12$dCJyvJBRaz8bpgLHRrHW2etVFXD0s51/r8tkdkZwXT8zXeBxT.Kb2", // Candi
      username: "Candi",
      pseudoname: "Candice",
      // First name and last name criteria
      firstNameAnswer: "Candice",
      lastNameAnswer: "Namubiru",
    },
    {
      // Danny / D-Dan
      signInEmailAddress: "d@d.com",
      hashedPassword:
        "$2a$12$iUu18mSH7lUoZc7g6g3sjuTVwy72Vyvc/kpTB9b0FERZA0ETepGP6", // D-Dan
      username: "D-Dan",
      pseudoname: "Danny",
      // First name and last name criteria
      firstNameAnswer: "Daniel",
      lastNameAnswer: "Craig",
    },
    {
      // Elijah / El-Hadj
      signInEmailAddress: "e@e.com",
      hashedPassword:
        "$2a$12$3AYWQwwEm70zwEpnP4AIyu49TEyNgvv1eMQvz0c.PgxmDZryZz67.", // El-Hadj
      username: "El-Hadj",
      pseudoname: "Elijah",
      // First name and last name criteria
      firstNameAnswer: "Elijah",
      lastNameAnswer: "Portgas",
    },
    {
      // Fiona / FioTriangle
      signInEmailAddress: "f@f.com",
      hashedPassword:
        "$2a$12$iwnzkb.lDDFRIHHBGMmOEONw00W/GIwX7OD8JxNhMciuLvk/rALbW", // FioTriangle
      username: "FioTriangle",
      pseudoname: "Fiona",
      // First name and last name criteria // N/A
    },
    {
      // Grace / Gracie-babie
      signInEmailAddress: "g@g.com",
      hashedPassword:
        "$2a$12$6yHob1L9kfrWTYM3B6pL1u67CnHI/AKMaxtfv28Ydk5VzxDeuhCUq", // Gracie-babie
      username: "Gracie-babie",
      pseudoname: "Grace",
      // First name and last name criteria // N/A
    },
    // {
    //   // Hector / Hectavus
    //   signInEmailAddress: "h@h.com",
    //   // hashedPassword: // Hectavus
    //   username: "Hectavus",
    //   pseudoname: "Hector"
    // },
    {
      // Lucas / Lucario
      signInEmailAddress: "l@l.com",
      hashedPassword:
        "$2a$12$oOJFmvblCEREkIlI/UcYIO8mOFF0OewEmYNXyB8MHlU.ZKU3dWuRC", // Lucario
      username: "Lucario",
      pseudoname: "Lucas",
      // First name and last name criteria
      firstNameAnswer: "Lucas",
      lastNameAnswer: "Earthbound",
    },
    {
      // Malcolm / MisterX
      signInEmailAddress: "m@m.com",
      hashedPassword:
        "$2a$12$wL5QmeFlP4ZErJ4w3nwN..feiXznhw4HDApZrI7he/zEyGY7Njg8G", // MisterX
      username: "MisterX",
      pseudoname: "Malcolm",
      // First name and last name criteria
      firstNameAnswer: "Malcolm",
      lastNameAnswer: "Little",
    },
    {
      // Nancy / Nonyes
      signInEmailAddress: "n@n.com",
      hashedPassword:
        "$2a$12$XrYHAPv0JJx9kHD75uOpqeuiopl1HLuMuGoXQJa8EzslhmgMw7Ntu", // Nonyes
      username: "Nonyes",
      pseudoname: "Nancy",
      // First name and last name criteria
      firstNameAnswer: "Nancy",
      lastNameAnswer: "Commodore",
    },
    {
      // Ophelia / Ophelia-swan
      signInEmailAddress: "o@o.com",
      hashedPassword:
        "$2a$12$nvpZFeUg3qgtbVonnbcWNOxsXxHqj643v7gBQs0OWo/VobRYAsP/G", // Ophelia-swan
      username: "Ophelia-swan",
      pseudoname: "Ophelia",
      // First name and last name criteria
      firstNameAnswer: "Ophelia",
      lastNameAnswer: "Rainbow",
    },
    {
      // Pamela / Pimpampoum
      signInEmailAddress: "p@p.com",
      hashedPassword:
        "$2a$12$/aojscO6dz4Oypig/dx1NuJ2DNYZn3RW5BfQVAzYwYyftmmkS6VUW", // Pimpampoum
      username: "Pimpampoum",
      pseudoname: "Pamela",
      // First name and last name criteria
      firstNameAnswer: "Pamela",
      lastNameAnswer: "Nargacuga",
    },
    // {
    //   // Quentin / WhoDidThatToYou
    //   signInEmailAddress: "q@q.com",
    //   hashedPassword:
    //     "$2a$12$GUVQktRR33Pxm9lxVAhmbu9SC.dInMR2h3Q7oNL3zYOngDaB7tOEe", // WhoDidThatToYou
    //   username: "WhoDidThatToYou",
    //   pseudoname: "Quentin",
    //   // First name and last name criteria
    //   firstNameAnswer: "Quentin",
    //   lastNameAnswer: "Tartarino",
    // },
    // {
    //   // Roland / RG
    //   signInEmailAddress: "r@r.com",
    //   hashedPassword:
    //     "$2a$12$upWLe7nfwK8mxnCJccSpEuhuq7Zgcl6zP0iOopC3vgyLDW1LH9dkO", // RG
    //   username: "RG",
    //   pseudoname: "Roland",
    //   // First name and last name criteria
    //   firstNameAnswer: "Roland",
    //   lastNameAnswer: "Gerric",
    // },
    // {
    //   // Soren / TruePrince
    //   signInEmailAddress: "s@s.com",
    //   hashedPassword:
    //     "$2a$12$G2A1bB4nKn66WVC9lkQWP.9qh2//xod6vQbTZNisyPB39YyuSTQiO", // TruePrince
    //   username: "TruePrince",
    //   pseudoname: "Soren",
    //   // First name and last name criteria
    //   firstNameAnswer: "Soren",
    //   lastNameAnswer: "Daein",
    // },
    // {
    //   // Titus / TheTitan
    //   signInEmailAddress: "t@t.com",
    //   hashedPassword:
    //     "$2a$12$OcHGmHR.zYmGo08sC80ZZuyP9KntjOHVG6RnrFKXnw2HyGSYU3X5m", // TheTitan
    //   username: "TheTitan",
    //   pseudoname: "Titus",
    //   // First name and last name criteria
    //   firstNameAnswer: "Titus",
    //   lastNameAnswer: "Invictus",
    // },
    // {
    //   // Ursula / BlueCrow
    //   signInEmailAddress: "u@u.com",
    //   hashedPassword:
    //     "$2a$12$ZFCN7rFeEgmVOYQ6M31mgehpGV1m8NiQ/CWGx3/qKTkJ4xOqWxhs.", // BlueCrow
    //   username: "BlueCrow",
    //   pseudoname: "Ursula",
    //   // First name and last name criteria
    //   firstNameAnswer: "Ursula",
    //   lastNameAnswer: "Black",
    // },
    // {
    //   // Victoria / LaVictoire
    //   signInEmailAddress: "v@v.com",
    //   hashedPassword:
    //     "$2a$12$QulFtzyqoOve.o6WMyLwCuzP6aUIfjksEPveRajJpcvcf.ojlGOgK", // LaVictoire
    //   username: "LaVictoire",
    //   pseudoname: "Victoria",
    //   // First name and last name criteria
    //   firstNameAnswer: "Victoria",
    //   lastNameAnswer: "Spice",
    // },
    // {
    //   // Wilda / oftheWild
    //   signInEmailAddress: "w@w.com",
    //   hashedPassword:
    //     "$2a$12$Y6eTEC/CBKoaZ7ryJDR6PuqxOaES6EZA.GjY8zjxsUb6XUYqo0die", // oftheWild
    //   username: "oftheWild",
    //   pseudoname: "Wilda",
    //   // First name and last name criteria
    //   firstNameAnswer: "Wilda",
    //   lastNameAnswer: "Wilderness",
    // },
    // {
    //   // Xenobia / ResRevealed
    //   signInEmailAddress: "x@x.com",
    //   hashedPassword:
    //     "$2a$12$v2MeRBz0ncCEBS3WMMDb.emMdjgL2Ep0bptqNRr.tsCiqcfowHsmG", // ResRevealed
    //   username: "ResRevealed",
    //   pseudoname: "Xenobia",
    //   // First name and last name criteria
    //   firstNameAnswer: "Xenobia",
    //   lastNameAnswer: "Desistoria",
    // },
  ];

  console.log({ usersData });

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding Users...`);

  const users = [];

  console.log(`Seeding all Users...`);

  for (const userData of usersData) {
    const user = await prisma.user.upsert({
      where: {
        signInEmailAddress: userData.signInEmailAddress,
      },
      update: {},
      create: {
        state: "LIVE",
        signInEmailAddress: userData.signInEmailAddress,
        hashedPassword: userData.hashedPassword,
        username: userData.username,
        pseudoname: userData.pseudoname,
      },
    });

    users.push(user);
  }

  console.log(`...All Users seeded.`);

  console.log({ users });

  console.log(`...Users seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding Relations...`);

  const relations = [];

  // “me” and Alice / contacts combination "irl" in v2

  const userLePapier = users.find((e) => e.signInEmailAddress === "l@l.me");

  if (!userLePapier)
    return console.error(
      `Error: Somehow the user with the sign-in email address l@l.me was not found.`,
    );

  const userAliceChan = users.find((e) => e.signInEmailAddress === "a@a.com");

  if (!userAliceChan)
    return console.error(
      `Error: Somehow the user with the sign-in email address a@a.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userAliceChan.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userAliceChan.id,
      },
    }),
  );

  // Alice and “me” / contacts combination "irl" in v2
  // (It is implied that former "irl"s in v2 now bookmark each other in v3.)

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userAliceChan.id,
          selectedUserId: userLePapier.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userAliceChan.id,
        selectedUserId: userLePapier.id,
      },
    }),
  );

  // “me” and Bianca / contacts combination "friend" in v2

  const userTrovounette = users.find((e) => e.signInEmailAddress === "b@b.com");

  if (!userTrovounette)
    return console.error(
      `Error: Somehow the user with the sign-in email address b@b.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userTrovounette.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userTrovounette.id,
      },
    }),
  );

  // Bianca and “me” / contacts combination "friend" in v2
  // (It is implied that for former "friend"s in v2, only the first original Contact from v2 now bookmarks the other in v3, further implying that there is no opposite Relation created in v3.)

  // “me” and Candice / contacts combination "none" in v2
  // (In these seeds, Candice is to be the only former "none" in v2 bookmarked in v3.)

  const userCandi = users.find((e) => e.signInEmailAddress === "c@c.com");

  if (!userCandi)
    return console.error(
      `Error: Somehow the user with the sign-in email address c@c.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userCandi.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userCandi.id,
      },
    }),
  );

  // Candice and “me” / contacts combination "none" in v2
  // (It is implied that for former "none"s in v2, only the first original Contact from v2 now bookmarks the other in v3 exclusively in the case of Candice, further implying that there is no opposite Relation created in v3.)

  // “me” and Danny / contacts combination "friend" in v2

  const userDDan = users.find((e) => e.signInEmailAddress === "c@c.com");

  if (!userDDan)
    return console.error(
      `Error: Somehow the user with the sign-in email address d@d.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userDDan.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userDDan.id,
      },
    }),
  );

  // “me” and Lucas / contacts combination "friend" in v2

  const userLucario = users.find((e) => e.signInEmailAddress === "l@l.com");

  if (!userLucario)
    return console.error(
      `Error: Somehow the user with the sign-in email address l@l.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userLucario.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userLucario.id,
      },
    }),
  );

  // “me” and Malcolm / contacts combination "irl" in v2

  const userMisterX = users.find((e) => e.signInEmailAddress === "m@m.com");

  if (!userMisterX)
    return console.error(
      `Error: Somehow the user with the sign-in email address m@m.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userMisterX.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userMisterX.id,
      },
    }),
  );

  // Malcolm and “me” / contacts combination "irl" in v2

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userMisterX.id,
          selectedUserId: userLePapier.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBookmarked: true,
        bookmarkedAt: new Date(),
        selectingUserId: userMisterX.id,
        selectedUserId: userLePapier.id,
      },
    }),
  );

  // “me” and Nancy / contacts combination "i-am-blocking" in v2

  const userNonyes = users.find((e) => e.signInEmailAddress === "n@n.com");

  if (!userNonyes)
    return console.error(
      `Error: Somehow the user with the sign-in email address n@n.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userNonyes.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBlocked: true,
        blockedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userNonyes.id,
      },
    }),
  );

  // “me” and Ophelia / contacts combination "has-me-blocked" in v2
  // meaning Ophelia and “me” / contacts combination "i-am-blocking"

  const userOpheliaSwan = users.find((e) => e.signInEmailAddress === "o@o.com");

  if (!userOpheliaSwan)
    return console.error(
      `Error: Somehow the user with the sign-in email address o@o.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userOpheliaSwan.id,
          selectedUserId: userLePapier.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBlocked: true,
        blockedAt: new Date(),
        selectingUserId: userOpheliaSwan.id,
        selectedUserId: userLePapier.id,
      },
    }),
  );

  // “me” and Pamela / relation combination “blocking-and-blocked” in v2
  // meaning “me” and Pamela / contacts combination "i-am-blocking"...

  const userPimPamPoum = users.find((e) => e.signInEmailAddress === "p@p.com");

  if (!userPimPamPoum)
    return console.error(
      `Error: Somehow the user with the sign-in email address p@p.com was not found.`,
    );

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userLePapier.id,
          selectedUserId: userPimPamPoum.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBlocked: true,
        blockedAt: new Date(),
        selectingUserId: userLePapier.id,
        selectedUserId: userPimPamPoum.id,
      },
    }),
  );

  // ...and Pamela and “me” / contacts combination "i-am-blocking"

  relations.push(
    await prisma.relation.upsert({
      where: {
        selectingUserId_selectedUserId: {
          selectingUserId: userPimPamPoum.id,
          selectedUserId: userLePapier.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        isBlocked: true,
        blockedAt: new Date(),
        selectingUserId: userPimPamPoum.id,
        selectedUserId: userLePapier.id,
      },
    }),
  );

  // NOTE: USERS FROM QUENTIN TO XENOBIA ARE CURRENTLY NO LONGER NEEDED AS SEEDS BECAUSE THE FRIEND AND IRL FLOWS ARE REMOVED IN V3.

  console.log({ relations });

  console.log(`...Relations seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding GroupsOfUsers...`);

  const groupsOfUsers = [];

  console.log(`Seeding "Friends"' GroupsOfUsers...`);

  for (const user of users) {
    const groupOfUsers = await prisma.groupOfUsers.upsert({
      where: {
        name_creatorUserId: {
          name: "Friends",
          creatorUserId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        name: "Friends",
        description: "My friends, including IRLs, exactly like in v2.",
        creatorUserId: user.id,
      },
    });

    groupsOfUsers.push(groupOfUsers);
  }

  console.log(`..."Friends"' GroupsOfUsers seeded.`);

  console.log(`Seeding "IRLs"' GroupsOfUsers...`);

  for (const user of users) {
    const groupOfUsers = await prisma.groupOfUsers.upsert({
      where: {
        name_creatorUserId: {
          name: "IRLs",
          creatorUserId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        name: "IRLs",
        description: "My IRLs, excluding friends, exactly like in v2.",
        creatorUserId: user.id,
      },
    });

    groupsOfUsers.push(groupOfUsers);
  }

  console.log(`..."IRLs"' GroupsOfUsers seeded.`);

  console.log({ groupsOfUsers });

  console.log(`...GroupsOfUsers seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding Criteria...`);

  const criteria = [];

  console.log(`Filtering users data for first names.`);

  const usersDataWithFirstNames = usersData.filter(
    (e) => e.firstNameAnswer !== undefined,
  );

  console.log(`Seeding first names Criteria...`);

  for (const userData of usersDataWithFirstNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const criterion = await prisma.criterion.upsert({
      where: {
        question_userId: {
          question: "First name",
          userId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        question: "First name",
        answer: userData.firstNameAnswer,
        userId: user.id,
      },
    });

    criteria.push(criterion);
  }

  console.log(`...First names Criteria seeded.`);

  console.log(`Filtering users data for last names.`);

  const usersDataWithLastNames = usersData.filter(
    (e) => e.lastNameAnswer !== undefined,
  );

  console.log(`Seeding last names Criteria...`);

  for (const userData of usersDataWithLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const criterion = await prisma.criterion.upsert({
      where: {
        question_userId: {
          question: "Last name",
          userId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        question: "Last name",
        answer: userData.lastNameAnswer,
        userId: user.id,
      },
    });

    criteria.push(criterion);
  }

  console.log(`...Last names Criteria seeded.`);

  console.log({ criteria });

  console.log(`...Criteria seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding GroupsOfCriteria...`);

  const groupsOfCriteria = [];

  console.log(`Filtering users data for first names last names.`);

  const usersDataWithFirstNamesLastNames = usersData.filter(
    (e) => e.firstNameAnswer !== undefined && e.lastNameAnswer !== undefined,
  );

  console.log(`Seeding "Names"' GroupsOfCriteria...`);

  for (const userData of usersDataWithFirstNamesLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = await prisma.groupOfCriteria.upsert({
      where: {
        name_creatorUserId: {
          name: "Names",
          creatorUserId: user.id,
        },
      },
      update: {},
      create: {
        state: "LIVE",
        name: "Names",
        description: "My first name, last name and other names.",
        creatorUserId: user.id,
      },
    });

    groupsOfCriteria.push(groupOfCriteria);
  }

  console.log(`..."Names"' GroupsOfCriteria seeded.`);

  console.log({ groupsOfCriteria });

  console.log(`...GroupsOfCriteria seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`Seeding GroupOfCriteriaCriteria...`);

  const groupOfCriteriaCriteria = [];

  console.log(
    `Seeding "Names"' GroupsOfCriteria' "First name" Criteria – GroupOfCriteriaCriteria...`,
  );

  for (const userData of usersDataWithFirstNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = groupsOfCriteria.find(
      (e) => e.creatorUserId === user.id && e.name === "Names",
    );

    if (!groupOfCriteria)
      return console.error(
        `Error: Somehow the group of criteria with the creator user ID of ${user.username} and the name "Names" was not found.`,
      );

    const criterion = criteria.find(
      (e) => e.userId === user.id && e.question === "First name",
    );

    if (!criterion)
      return console.error(
        `Somehow the criterion with the user ID of ${user.username} and the question "First name" was not found.`,
      );

    groupOfCriteriaCriteria.push(
      await prisma.groupOfCriteriaCriterion.upsert({
        where: {
          groupOfCriteriaId_criterionId: {
            groupOfCriteriaId: groupOfCriteria.id,
            criterionId: criterion.id,
          },
        },
        update: {},
        create: {
          state: "LIVE",
          groupOfCriteria: {
            connect: {
              name_creatorUserId: {
                name: "Names",
                creatorUserId: user.id,
              },
            },
          },
          criterion: {
            connect: {
              question_userId: {
                question: "First name",
                userId: user.id,
              },
            },
          },
        },
      }),
    );
  }

  console.log(
    `..."Names"' GroupsOfCriteria' "First name" Criteria – GroupOfCriteriaCriteria seeded.`,
  );

  console.log(
    `Seeding "Names"' GroupsOfCriteria' "Last name" Criteria – GroupOfCriteriaCriteria...`,
  );

  for (const userData of usersDataWithLastNames) {
    const user = users.find(
      (e) => e.signInEmailAddress === userData.signInEmailAddress,
    );

    if (!user)
      return console.error(
        `Error: Somehow the user with the sign-in email address ${userData.signInEmailAddress} was not found.`,
      );

    const groupOfCriteria = groupsOfCriteria.find(
      (e) => e.creatorUserId === user.id && e.name === "Names",
    );

    if (!groupOfCriteria)
      return console.error(
        `Error: Somehow the group of criteria with the creator user ID of ${user.username} and the name "Names" was not found.`,
      );

    const criterion = criteria.find(
      (e) => e.userId === user.id && e.question === "Last name",
    );

    if (!criterion)
      return console.error(
        `Error: Somehow the criterion with the user ID of ${user.username} and the question "Last name" was not found.`,
      );

    groupOfCriteriaCriteria.push(
      await prisma.groupOfCriteriaCriterion.upsert({
        where: {
          groupOfCriteriaId_criterionId: {
            groupOfCriteriaId: groupOfCriteria.id,
            criterionId: criterion.id,
          },
        },
        update: {},
        create: {
          state: "LIVE",
          groupOfCriteria: {
            connect: {
              name_creatorUserId: {
                name: "Names",
                creatorUserId: user.id,
              },
            },
          },
          criterion: {
            connect: {
              question_userId: {
                question: "Last name",
                userId: user.id,
              },
            },
          },
        },
      }),
    );
  }

  console.log(
    `..."Names"' GroupsOfCriteria' "Last name" Criteria – GroupOfCriteriaCriteria seeded.`,
  );

  console.log({ groupOfCriteriaCriteria });

  console.log(`...GroupOfCriteriaCriteria seeded.`);

  ///////////////////////////////////////////////////////////////////////////

  console.log(`...Initial seeds complete.`);
}

seed();

/* Notes
Upsert has this awesome feature that when update is empty, even the createdAt field is left untouched.
...
Connects can't be nested. So I'm going to need within the seeds process to save as variables all the seeds I create so that I can reused them later on with .find and other array methods.
At some point even my users.find helper will have to be done once only. It will come during refactoring but essentially all everything that is strictly like to a user will be done via that user in a for loop of users.
...Or I can do an input-output on usersData.
...Or just work directly with users instead of usersData.
...No. Since I'm using and customizing usersData for conditionality. Like if a user in usersData does not have a firstName, that will not be reflected in Prisma's User.
Relations (bookmarks and blocks) will be made by hand though.
I could shorten the relation.upsert into a function. And perhaps do the same for all the other upserts.
Suggesting turning Relations' state to NONE when a bookmark is removed. (Or a block too, meaning when a Relation becomes stale.)
Do not confused Relation.isBlocked in v3 and and Contact.isBlocking in v2. They're same and here's the logic: 
- "The relation I have with you is blocked."
- "The contact I have with you is blocking."
Now that mirrors on Relations are truly optional, is there a case to be made for a Relation where selecting and selected are the same users?
*/

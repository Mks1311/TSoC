import NeucronSDK from "neucron-sdk";

const neucron = new NeucronSDK();

const authModule = neucron.authentication;
const walletModule = neucron.wallet;

// const signUpResponse = await authModule.signUp({ email: "manishNew@dev.neucron.io", password: "manish@TSoc" });
// console.log(signUpResponse);

const loginResponse = await authModule.login({ email: "manish31311@gmail.com", password: "manish@TSoc" });
console.log(loginResponse);

const walletKeys = await walletModule.getWalletKeys({});
console.log(walletKeys);


// For Default wallet balance
const DefaultWalletBalance = await walletModule.getWalletBalance({});
console.log(DefaultWalletBalance);

const addresses = await walletModule.getAddressesByWalletId({});
console.log(addresses);

// const options = {
//     outputs: [
//       {
//         address: 'vrundat919@dev.neucron.io',
//         note: 'test',
//         amount: 100
//       }
//     ]
//   };

// const payResponse = await neucron.pay.txSpend(options)
// console.log(payResponse)

// const walletHistory = await walletModule.getWalletHistory({ });
// console.log(walletHistory);


// console.log('initiating wallet')
// const walletCreation1 = await walletModule.createWallet({ walletName: 'Hello tsoc1' });
// console.log(walletCreation1);

// const walletBalance = await walletModule.getWalletBalance({ walletId: walletCreation1.walletID });
// console.log(walletBalance);

// const addresses = await walletModule.getAddressesByWalletId({ walletId: walletCreation1.walletID });
// console.log(addresses);

// const mnemonic = await walletModule.getMnemonic({ walletId: walletCreation1.walletID });
// console.log(mnemonic);

// const allUtxos = await walletModule.getAllUtxos({ walletId: walletCreation1.walletID });
// console.log(allUtxos);

// const xPubKeys = await walletModule.getXPubKeys({ walletId: walletCreation1.walletID });
// console.log(xPubKeys);

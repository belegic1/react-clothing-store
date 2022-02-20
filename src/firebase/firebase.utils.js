import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyB60_hew6XSPiV3G8oNiG88ujzr93lmmK4",
    authDomain: "crwn-db-67243.firebaseapp.com",
    projectId: "crwn-db-67243",
    storageBucket: "crwn-db-67243.appspot.com",
    messagingSenderId: "363068043218",
    appId: "1:363068043218:web:7a257f4f74d9a4b0ede20b",
    measurementId: "G-B6QT2036H9"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const collectionRef = firestore.collection('users')

    const snapShot = await userRef.get()
    const collectionSnapshot = await  collectionRef.get()
    // console.log({collection: collectionSnapshot.docs.map(doc => doc.data())});
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user",error.message);
        }
    }
    return userRef
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    // console.log(collectionRef);
    const batch = firestore.batch()

    objectsToAdd.forEach((obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data()
        
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ propmpt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
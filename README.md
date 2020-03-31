# Veribit
Metanet Entity Access Management

* This is currently an early Alpha pre-build and is not production ready.

### Build
Veribit v0.0.10 Alpha

### Description
Veribit is an early-alpha platform that manages entity identity and verification for globally connected Metanet applications on the Bitcoin SV blockchain. Entities include users, products, licences, documents and media, either peer-to-peer, peer-to-machine or machine-to-mahine (P2P, P2M & M2M). This helps users and other entities to track, trace and log interactions such as logins, IoT, logistics, freight, customs, border control, taxation, automata, trusts, deeds, equities, intellectual property, identity, AML, KYC and much, much more. Many regulations that bind financial companies in a KYC ("Know Your Customer" / "Know Your Client") process also apply to all crytocurrency projects. We have a simple utility that can be plugged into any service, application or dashboard via API, subject to those regulations that help collect the necessary user info for compliance.

Veribit is designing a whole suite of supplementary products to support a growing ecosystem of a valued utility data framework to allow the economic incentives of a scalable, immutable public ledger technology to power the next generation of internet, powered by a small-world network of miners. Forming the microservices layers at the periphery, this Mandala network is named 'The Matanet'.

### What does it do?
Currently, Veribit is a BDI (Blockchain Data Interchange) platform that registers, records and verifies user identity to power the contractual interchange of entity data. These verified identities form an immutable hierarchically deterministic data provenance for interacting with Metanet applications. Initial registration powers global Metanet login systems, allows uploading of face images using the webcam api and facial recognition, OCR (Optical Character Recognition) for automated KYC (Know Your Customer) and AML (Anti Money Laundering) using advanced anthropometrics.

### Digital Twin - Anthropometrics. 
A purely digital representation of your biometric markers. Facial recognition, fingerprints, retina etc. Your digital representation is uploaded and obfuscated as publically human readable via Shamir Secret Split Key Thresholding. Key slices for data interrogation can only be authorised by the owner, verified by the platform and awarded and revoked by the issuer. All interactions by any entity is immutably logged on-chain for full accountability. This is triple entry accounting as it should be. Open, honest, attestable, accountable, immutable, private & secure.

### Verikey
Verikey is a global login system at the heart of every Veribit application that binds your verified identity with all Metanet interactions. This global keychain is non-custodial, fully private and secure. You control your keys and your data. Veribit allows the attestation of credentials to authenticate yourself (ie: proof of age) without giving away your personal data to 3rd parties to hold and keep secure. The codebase is written in JavaScript, React, Redux and NodeJS using GraphQL APIs and a React Native Ant Design UI framework and a React Redux Saga data workflow design pattern. It uses Neon Planaria for the database, using MongoDB for the collation. We use Metanet protocols such as MAP, AIP and BAP for signing, authoring, attestation and revocation. Veribit is Bitcom registered as "Veribit" and is a private limited company based in the UK as Veribit Ltd.

### BitLink - Linked Systems & Apps
* KYA Know Your Assets
* KYB Know Your Business
* KYC Know Your Customer
* KYD Know Your Data
* KYE Know Your Entity
* KYF Know Your Friends
* KYG Know Your Genetics
* KYH Know Your Health
* KYI Know Your Information

### Veribit Suite of Products
* Novi - Identity & Verification
* Levo - Media Uploader
* Nosco - Genetics, Genomics, Health
* Scio - Neural Learning Algos & AI
* Disco - Chain Search Engine
* Indicium - Indexing Service
* Specto - Media Viewer & Player
* Intelligo - Business Intelligence
* Teneo - Intellectual Property
* Percipio - Data Analytics
* Antikythera - Global Computation

### Disclaimer
While it is an open source, pre-alpha software collaborative project and great learning experience, this early release is targeted only for user ID verification and KYC service to be immutably stored on the Bitcoin SV blockchain. An initial release version will be entirely hosted on-chain in a serverless environment, so this very early code is publically available for collaboration purposes, many with bounty projects attached. To reiterate, this codebase is not production ready. 

### Project Structure
Consists of three components:
* User registration web interface
* Backend server application
* Admin interface


**You will need to clone these 3 repos individually and follow the instructions within each one.**

1. ** User registration web interface - **
(https://github.com/RoyMurphy/Veribit/tree/master/veribit-fe)   This is a react application that serves as the frontend for user registration. Registration is initiated by a user email and an authentication key sent from the backend of whichever service is connected, then a token to begin registration is returned. A user is then redirected and may upload an identity document, selfie with the identity document, and fill out fields with any required information for an admin to review.

2. ** Backend server application - **
(https://github.com/RoyMurphy/Veribit/tree/master/veribit-be)   This is the backend, based in nodejs and mongodb. It serves both the admin and end user APIs. It can be customized to fit your application needs, and with a webhook going to the application you are trying to KYC. You can integrate an email provider by registering an account, making the appropriate DNS entries, and pasting in the keys to the application if you would like to send email notifications through this component as well.

3. ** Admin interface - **
(https://github.com/RoyMurphy/Veribit/tree/master/veribit-admin)  This is the admin panel. It should be configured to aim at the backend, and with an application owner email specified in the configuration.

### Documentation
[**API Docs**](https://github.com/RoyMurphy/Veribit/wiki) - You can view the API documentation in the wiki. Click through the bar on the right to page through the different APIs.

### Contributing
If you see a change, bugfix or other edit to make, please file an issue and open a PR. We will be happy to review it and get it merged in. Keep an eye out for specific bounty requests that will be listed in the [Issues](https://github.com/RoyMurphy/Veribit/issues) section. 

### We are hiring!
If you're a talented Bitcoin Script Engineer with tons of React experience or a JS Ninja that would like to be considered for a permanent role, then drop us an email at careers@veribit.io

### Usage
Feel free to fork this repo if you intend on helping out with code improvements. The current MIT license maybe subject to change as we move towards a production ready environment to be hosted completely on-chain.
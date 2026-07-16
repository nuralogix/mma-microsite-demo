# MMA Device Results-Sharing Website Demo

This repository showcases a demo website designed to **render and display MMA (Magic Mirrow Appliance) device results** passed as an encoded string in the URL query parameter.

This results-sharing website allows you to easily share results with users over the phone. They can simply scan a QR Code linked to this website and access their results right on their devices.

---

## Live Demo (Local)

To test this project locally, follow the instructions below.

### 1. Clone the Repository

```bash
git clone https://github.com/nuralogix/mma-microsite-demo.git
cd mma-microsite-demo
```

### 2. Start a Local HTTP Server

With Python (3.x):
```bash
python -m http.server 8080
```

With Node.js:
```bash
npx http-server -p 8080
```

### 3. Open in Your Browser
Visit this URL to see the demo in action with a sample encoded results string:
```perl
http://localhost:8080/?r=TlExu%2Fllm2AKrlJRhXNUU%2BoVWRsnQElAzBFE09eAUHGSz0ETZko6v6cUUqQae1X2zslX8U27TE49nFB5WgBC2Lk5ShW%2BJkTyE6lOJvMAPGye%2F0DDIpVQY6nJOUgstFHKAwBCHNHxQq6RUz5AsG5D%2BMAASh0OQET4at1VSQrPRyfTAEKU6YBPa5U%2BVE0KAAAmYKVS9JOiU0sY21BKptBOmLdvQ7AqJS41jMNDXMKtVf8MlVDYTwBCCRAgUCAhUFkiTtBUVTgAPA%3D%3D
```
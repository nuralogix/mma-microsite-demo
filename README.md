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
http://localhost:8080/?r=TlExNcKWj0Eh81BjqRQ4KBYAPMoDAELT14BP2LlnRjbEgVMDvAAAYAqFU31a7FUmYIFTsCrsKyVy8E5cwpVWMegAAH%2BVAAATZnc4%2BGqGVcbNADzrxihR9JP0VCyHmjkm8wA8QLAzQ6QaGFWGA3xDU%2Bp4WVGFC1ZKpkpM%2BMAAS595a0tsnmY%2BSQr5Rx0OQEToSyhRqNtnR%2F%2BP9FRAzAhEHNF8Q2uVDFTW12dG8hPjTyfTq0DxTWtLNYz2RU0KADz2zpJXQg8AAHlaAEL%2FDIpQ2E8AQA%3D%3D
```
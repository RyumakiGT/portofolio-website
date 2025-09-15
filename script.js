// Hamburger menu
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

// Komentar
const commentForm = document.getElementById("commentForm");
if (commentForm) {
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = commentForm.querySelector("input").value;
    const text = commentForm.querySelector("textarea").value;
    const commentList = document.getElementById("commentList");
    const div = document.createElement("div");
    div.innerHTML = `<strong>${name}:</strong> ${text}`;
    commentList.appendChild(div);
    commentForm.reset();
  });
}

// Three.js simple 3D cube
const canvas = document.getElementById("three-canvas");
if (canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 3;

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
}

// EmailJS untuk contact form
if (typeof emailjs !== "undefined") {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Ganti dengan user ID EmailJS kamu
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", contactForm)
        .then(() => alert("Pesan berhasil terkirim!"))
        .catch((err) => alert("Error: " + JSON.stringify(err)));
    });
  }
}
window.addEventListener("load", function () {
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "splash-screen");
  overlay.innerHTML = `
      <div class="splash-content">
        <h1>WELCOME</h1>
        <img src="assets/images/shakilaundry-icon.png" alt="ShakiLaundry Image"> 
        <p>Loading...</p>
      </div>
    `;
  document.body.appendChild(overlay);

  setTimeout(function () {
    document.getElementById("splash-screen").style.display = "none";
  }, 1500);
});

var dataBarang = [
  {
    nama_barang: "Nama Barang",
    jumlah: "jumlah",
    total: 0,
  },
];

function showBarang() {
  var listBarang = document.getElementById("table");

  listBarang.innerHTML =
    "<tr><th>Nama Barang</th><th>Jumlah</th><th>Total</th><th>Action</th></tr>";

  for (let i = 0; i < dataBarang.length; i++) {
    if (i !== 0) {
      var btnEdit =
        "<a href='#' class='btn btn-primary btn-sm' onclick='editBarang(" +
        i +
        ")'>Edit</a>";
      var btnHapus =
        "<a href='#' class='btn btn-danger btn-sm' style='margin:5px;' onclick='deleteBarang(" +
        i +
        ")'>Hapus</a>";
      listBarang.innerHTML +=
        "<tr><td>" +
        dataBarang[i].nama_barang +
        "</td><td>" +
        dataBarang[i].jumlah +
        "</td><td>" +
        dataBarang[i].total +
        "</td><td>" +
        btnEdit +
        btnHapus +
        "</td></tr>";
    } else {
    }
  }

  const sum = dataBarang.reduce((accumulator, object) => {
    return accumulator + object.total;
  }, 0);

  const totalBayar = document.getElementById("total_bayar");
  totalBayar.innerHTML = sum;
}

function cekTotalHarga(jenisBarang, jumlah) {
  if (jenisBarang == "Drying Machine" && jumlah > 3) {
    const total = jumlah * 23000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Drying Machine" && jumlah <= 3) {
    const total = jumlah * 23000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Drying Clothes") {
    const total = jumlah * 25000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Iron") {
    const total = jumlah * 30000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Cover for Clothes") {
    const total = jumlah * 20000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Clean Clothes") {
    const total = jumlah * 27000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  } else if (jenisBarang == "Clothing Repairs") {
    const total = jumlah * 40000;
    return {
      nama_barang: jenisBarang,
      jumlah: jumlah,
      total: total,
    };
  }
}

function addBarang() {
  var jenisBarang = document.getElementById("jenis_barang").value;
  var jumlah = document.getElementById("jumlah").value;

  const newDataBarang = cekTotalHarga(jenisBarang, jumlah);
  dataBarang.push(newDataBarang);
  showBarang();
}

function editBarang(id) {
  var newjumlah = prompt("Edit jumlah", dataBarang[id].jumlah);
  const detailJenisBarang = dataBarang[id].nama_barang;

  const newDataBarang = cekTotalHarga(
    detailJenisBarang,
    newjumlah || dataBarang[id].jumlah
  );

  dataBarang[id] = newDataBarang;
  showBarang();
}

function deleteBarang(id) {
  dataBarang.splice(id, 1);
  showBarang();
}

showBarang();

function searchBarang() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchBarang");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

showBarang();

var kirimButton = document.getElementById("kirimButton");
var myForm = document.getElementById("myForm");

// Menambahkan event listener pada saat tombol Kirim diklik
kirimButton.addEventListener("click", function (event) {
  // Mendapatkan nilai dari input
  var nama = document.getElementById("nama").value;
  var pilihan = document.getElementById("pilihan").value;
  var nomor = document.getElementById("nomor").value;

  var selectedOptionText =
    document.getElementById("pilihan").options[
      document.getElementById("pilihan").selectedIndex
    ].text;

  // Menampilkan pesan di bawah tombol setelah diklik
  var informasiTambahan = document.getElementById("informasiTambahan");
  informasiTambahan.textContent =
    "Hai " +
    nama +
    ", Anda memilih untuk " +
    selectedOptionText +
    ", dan kami akan menghubungi lagi ke nomor " +
    nomor +
    ".";

  informasiTambahan.style.display = "block"; // Menampilkan pesan

  // Menghentikan pengiriman form
  event.preventDefault();
});

// Render services when the page loads
window.onload = renderServices;

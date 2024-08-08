document.addEventListener('DOMContentLoaded', function () {
    // Menambahkan fungsi klik untuk dropdown
    document.querySelectorAll('.dropdown-toggle').forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        });
    });

    // Menambahkan fungsi klik untuk navigasi sidebar
    document.querySelectorAll('.sidebar-item').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Menghapus kelas aktif dari semua sidebar-item
            document.querySelectorAll('.sidebar-item').forEach(function (el) {
                el.classList.remove('active');
            });

            // Menambahkan kelas aktif ke item yang diklik
            this.classList.add('active');

            // Menyembunyikan semua konten utama
            document.querySelectorAll('.main-content').forEach(function (content) {
                content.classList.remove('active-content');
            });

            // Menampilkan konten utama yang dipilih
            const targetId = this.getAttribute('href');
            if (targetId) {
                document.querySelector(targetId).classList.add('active-content');
            }
        });
    });
});

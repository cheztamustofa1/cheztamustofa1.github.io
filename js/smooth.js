$('.page-scroll').on('click',function(e){
    
        // ambil href
        var tujuan = $(this).attr('href');
        // tangkap elemen ybs
        var elemenTujuan = $(tujuan);
    
        // pindahkan scroll
        $('body').animate({
          scrollTop: elemenTujuan.offset().top - 50
        }, 1250, 'swing');
    
        e.preventDefault();
        
});
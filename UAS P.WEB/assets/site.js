function toggleMenu(){document.getElementById('mainNav').classList.toggle('open')}
document.addEventListener('DOMContentLoaded',()=>{
 const track=document.querySelector('.slides');
 if(track){let index=0;const slides=track.children.length;const show=()=>track.style.transform=`translateX(-${index*100}%)`;document.querySelector('[data-prev]').addEventListener('click',()=>{index=(index-1+slides)%slides;show()});document.querySelector('[data-next]').addEventListener('click',()=>{index=(index+1)%slides;show()});}
 const form=document.querySelector('#orderForm');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const summary=[`Nama: ${data.get('nama')}`,`WhatsApp: ${data.get('telepon')}`,`Pilihan: ${data.get('burung')}`,`Jumlah: ${data.get('jumlah')}`,`Alamat: ${data.get('alamat')}`].join('\\n');const msg=document.querySelector('#successMessage');msg.hidden=false;msg.textContent='Terima kasih, '+data.get('nama')+'! Data pesanan berhasil disiapkan. Tim CanaryNest akan menghubungi Anda melalui WhatsApp untuk konfirmasi.';form.reset();});}
});
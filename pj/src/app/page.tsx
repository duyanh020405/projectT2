"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link'; 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from 'axios'
export default function RotatingMessages() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const messages = [
    { text: 'Free ship toàn quốc với các sản phẩm trên 500k', href: '' },
    { text: 'Sản phẩm được bảo hành', href: '' },
    { text: 'Đổi trả sản phẩm sau 7 ngày', href: '' },
    { text: 'Hotline mua hàng : (098) 786 4321', href: '' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [messages.length]);
 console.log(axios.get('http://localhost:8080/products'));
 
  return (
    
    <div>
      {/**Quảng cáo bé trên header */}

      <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '10px',border:'none' }}>
        <Link href={messages[currentMessageIndex].href}>
            {messages[currentMessageIndex].text}
        </Link>
      </div>

      {/**Logo */}

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <img src='https://th.bing.com/th/id/OIP.uF1krlA39tVJPHEQHgWUDAHaEt?rs=1&pid=ImgDetMain' alt="Logo" style={{ width: '300px', height: '130px' }} />
      </div>

      {/**Select option sản phẩm */}
<div style={{display:'flex',flexDirection:'row',gap:30}}>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="áo khoác" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="ni">Áo nỉ</SelectItem>
    <SelectItem value="du">Áo dù</SelectItem>
    <SelectItem value="kaki">Áo kaki</SelectItem>
    <SelectItem value="playze_nam">playze nam</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder=" áo thun" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="thunn">Áo thun ngắn</SelectItem>
    <SelectItem value="thund">Áo thun dài</SelectItem>
    <SelectItem value="thunpl">Áo thun polo</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="áo sơ mi" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="somin">Áo sơ mi ngắn tay</SelectItem>
    <SelectItem value="somid">Áo sơ mi dài tay</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="quần dài" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="quanj">Quần dài jean</SelectItem>
    <SelectItem value="quank">Quần dài kaki</SelectItem>
    <SelectItem value="quanv">Quần dài vải</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="quần short" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="shortt">Quần thun</SelectItem>
    <SelectItem value="shorttay">Quần tây</SelectItem>
    <SelectItem value="shortd">Quần dù</SelectItem>
  </SelectContent>
</Select>
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="phụ kiện khác" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="shortt">Đồng hồ</SelectItem>
    <SelectItem value="shorttay"> Vòng tay</SelectItem>
    <SelectItem value="shortd">Cà vạt</SelectItem>
  </SelectContent>
</Select>

</div>
      

    </div>
  );
}

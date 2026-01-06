import { CustomCard } from '@/components/Custom/card/CustomCard';
import { CustomDialog } from '@/components/Custom/dialog/CustomDialog';
import CustomInput from '@/components/Custom/input/CustomInput';
import { CustomTable } from '@/components/Custom/table/CustomTable';

import type { Manga } from '@/components/Custom/card/CustomCard';

const Dashboard = () => {
  const mangaList: Manga[] = [
    {
      id: '1',
      title: 'Solo Leveling',
      titleTh: 'โซโลเลเวลลิ่ง',
      cover:
        'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop',
      author: 'Chugong',
      genres: ['แอ็คชั่น', 'แฟนตาซี'],
      rating: 4.9,
      chapters: 200,
      views: '15.2M',
      status: 'completed',
      description:
        'ซองจินวู ฮันเตอร์ระดับ E ที่อ่อนแอที่สุด ได้รับพลังพิเศษที่ทำให้เขาสามารถเลเวลอัพได้ไม่จำกัด',
      lastUpdated: '2 ชั่วโมงที่แล้ว',
    },
    {
      id: '2',
      title: 'One Punch Man',
      titleTh: 'วันพันช์แมน',
      cover:
        'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop',
      author: 'ONE',
      genres: ['แอ็คชั่น', 'คอมเมดี้'],
      rating: 4.8,
      chapters: 185,
      views: '12.8M',
      status: 'ongoing',
      description:
        'ไซตามะ ฮีโร่ที่สามารถเอาชนะศัตรูทุกคนได้ด้วยหมัดเดียว แต่กลับรู้สึกเบื่อหน่ายกับความแข็งแกร่งของตัวเอง',
      lastUpdated: '5 ชั่วโมงที่แล้ว',
    },
    {
      id: '3',
      title: 'Demon Slayer',
      titleTh: 'ดาบพิฆาตอสูร',
      cover:
        'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop',
      author: 'Koyoharu Gotouge',
      genres: ['แอ็คชั่น', 'ดราม่า'],
      rating: 4.9,
      chapters: 205,
      views: '20.1M',
      status: 'completed',
      description:
        'ทันจิโร่เด็กหนุ่มที่ครอบครัวถูกอสูรสังหาร และน้องสาวกลายเป็นอสูร เขาต้องออกเดินทางเพื่อหาทางรักษาน้องสาว',
      lastUpdated: '1 วันที่แล้ว',
    },
    {
      id: '4',
      title: 'Jujutsu Kaisen',
      titleTh: 'มหาเวทย์ผนึกมาร',
      cover:
        'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop',
      author: 'Gege Akutami',
      genres: ['แอ็คชั่น', 'สยองขวัญ'],
      rating: 4.7,
      chapters: 250,
      views: '18.5M',
      status: 'ongoing',
      description:
        'อิทาโดริ ยูจิ นักเรียนมัธยมปลายที่กลืนนิ้วของสุคุนะ ราชาคำสาปเข้าไป และต้องเข้าร่วมโรงเรียนเวทมนตร์',
      lastUpdated: '3 ชั่วโมงที่แล้ว',
    },
    {
      id: '5',
      title: 'My Hero Academia',
      titleTh: 'มายฮีโร่ อคาเดเมีย',
      cover:
        'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&h=600&fit=crop',
      author: 'Kohei Horikoshi',
      genres: ['แอ็คชั่น', 'โชเน็น'],
      rating: 4.6,
      chapters: 420,
      views: '25.3M',
      status: 'completed',
      description:
        'มิโดริยะ อิซุคุ เด็กหนุ่มที่เกิดมาไม่มีพลังวิเศษ แต่ฝันอยากเป็นฮีโร่ที่ยิ่งใหญ่ที่สุด',
      lastUpdated: '12 ชั่วโมงที่แล้ว',
    },
    {
      id: '6',
      title: 'Chainsaw Man',
      titleTh: 'มนุษย์เลื่อยยนต์',
      cover:
        'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=600&fit=crop',
      author: 'Tatsuki Fujimoto',
      genres: ['แอ็คชั่น', 'สยองขวัญ'],
      rating: 4.8,
      chapters: 160,
      views: '14.7M',
      status: 'ongoing',
      description:
        'เดนจิ เด็กหนุ่มยากจนที่รวมร่างกับปีศาจเลื่อยยนต์ และกลายเป็นนักล่าปีศาจ',
      lastUpdated: '6 ชั่วโมงที่แล้ว',
    },
    {
      id: '7',
      title: 'Attack on Titan',
      titleTh: 'ผ่าพิภพไททัน',
      cover:
        'https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=600&fit=crop',
      author: 'Hajime Isayama',
      genres: ['แอ็คชั่น', 'ดราม่า'],
      rating: 4.9,
      chapters: 139,
      views: '30.2M',
      status: 'completed',
      description:
        'เอเรน เยเกอร์ สาบานว่าจะกำจัดไททันทั้งหมดหลังจากแม่ของเขาถูกไททันกิน',
      lastUpdated: '2 วันที่แล้ว',
    },
    {
      id: '8',
      title: 'Spy x Family',
      titleTh: 'สปาย x แฟมิลี่',
      cover:
        'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop',
      author: 'Tatsuya Endo',
      genres: ['คอมเมดี้', 'แอ็คชั่น'],
      rating: 4.7,
      chapters: 100,
      views: '16.9M',
      status: 'ongoing',
      description:
        'สายลับระดับสูงต้องสร้างครอบครัวปลอมเพื่อภารกิจ โดยไม่รู้ว่าภรรยาเป็นนักฆ่าและลูกสาวอ่านใจได้',
      lastUpdated: '8 ชั่วโมงที่แล้ว',
    },
  ];
  return (
    <div>
      <CustomInput name='TEST' value='' placeholder='TEST' />
      <CustomDialog
        title='TEST'
        description='ssss'
        buttonActionName='TEST'
        classNameDialogContent='xl:min-w-[1200px] min-w-[800px]'
      />
      <CustomTable
        data={[]}
        columns={[]}
        onPageChange={(value) => console.log(value)}
        onRowsPerPageChange={(value) => console.log(value)}
        page={0}
        rowsPerPage={0}
        totalItems={0}
      />
      <div className='grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 w-full'>
        {mangaList.map((manga, index) => (
          <CustomCard key={index} manga={manga} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

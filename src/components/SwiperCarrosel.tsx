import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import styles from "../styles/sectionFeedback.module.scss";
import Image from "next/image";
import avatar from "../assets/avatarFeedback.svg";

SwiperCore.use([Navigation, Pagination]);

const SwiperCarrosel = () => {
  return (
    <div style={{maxWidth: '1440px', width: '100%'}}>
 <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.secondContainer}>
          <div className={styles.feedbackContainer}>
            <Image
              src={avatar}
              alt="Avatar com foto de moça"
              className={styles.avatar}
            />
            <span>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Norem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </span>
            <h4>Depoimento de parceiros</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <div className={styles.secondContainer}>
          <div className={styles.feedbackContainer}>
            <Image
              src={avatar}
              alt="Avatar com foto de moça"
              className={styles.avatar}
            />
            <span>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Norem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </span>
            <h4>Depoimento de parceiros</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.secondContainer}>
          <div className={styles.feedbackContainer}>
            <Image
              src={avatar}
              alt="Avatar com foto de moça"
              className={styles.avatar}
            />
            <span>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Norem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </span>
            <h4>Depoimento de parceiros</h4>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.secondContainer}>
          <div className={styles.feedbackContainer}>
            <Image
              src={avatar}
              alt="Avatar com foto de moça"
              className={styles.avatar}
            />
            <span>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.Norem
              ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum, ac aliquet odio mattis.
            </span>
            <h4>Depoimento de parceiros</h4>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    </div>
   
  );
};

export default SwiperCarrosel;

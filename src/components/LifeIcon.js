import { HeartTwoTone, HeartFilled } from '@ant-design/icons';

const style = {
  commonIconStyle: {
    fontSize: 60
  }
};

const LifeIcon = ({ isAvailable }) => (
  <>
    {isAvailable ? (
      <HeartTwoTone style={style.commonIconStyle} twoToneColor="#eb2f96" />
    ) : (
      <HeartFilled style={style.commonIconStyle} />
    )}
  </>
);

export default LifeIcon;

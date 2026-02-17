type Props = {
  title: string;
  containerStyles?: string;
};

export default function CustomButton({ title, containerStyles }: Props) {
  return (
    <button
      className={`py-3 px-6 rounded-full text-white font-medium transition ${containerStyles}`}
    >
      {title}
    </button>
  );
}
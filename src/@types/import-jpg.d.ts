// *.jpg 파일에 대한 선언
// 이 부분이 있어야 jpg 파일을 import 할때 ts error 발생하지 않음
declare module "*.jpg" {
	const content: string;
	export default content;
}

import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import ModalEntrega from "./entrega";
import ModalPagamento from "./pagamento";
import { RootState } from "../../../store";
import { EnumAcoes } from "../../../global/utils/Enum";
import * as S from "./style";
import { Product, useSendPurchaseOrderMutation } from "../../../services/api";
import { OpenModal } from "../../../store/slices/ModelManager";
import ModalSucesso from "./sucesso";

export type FormikValues = {
  delivery_fullname: string;
  delivery_address: string;
  delivery_city: string;
  delivery_zip: string;
  delivery_number: string;
  delivery_observe: string;
  paymentcard_nome: string;
  paymentcard_number: string;
  paymentcard_code: number;
  paymentcard_expiremonth: number;
  paymentcard_expireyear: number;
};

const initialValues: FormikValues = {
  delivery_fullname: "",
  delivery_address: "",
  delivery_city: "",
  delivery_zip: "00000-000",
  delivery_number: "S/N",
  delivery_observe: "",
  paymentcard_nome: "",
  paymentcard_number: "0000 0000 0000 0000",
  paymentcard_code: 123,
  paymentcard_expiremonth: 11,
  paymentcard_expireyear: 1234
};

const validationSchema = Yup.object().shape({
  delivery_fullname: Yup.string()
    .min(2, "Minimo 5 Carateres!")
    .max(100, "Maximo 100 Carateres!")
    .required("Campo Obrigatorio"),
  delivery_address: Yup.string()
    .nullable("Campo não pôde ficar vazio")
    .max(200, "Maximo 200 Carateres!")
    .required("Campo Obrigatorio"),
  delivery_city: Yup.string()
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
  paymentcard_nome: Yup.string()
    .min(2, "Minimo 5 Carateres!")
    .max(100, "Maximo 100 Carateres!")
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
  paymentcard_number: Yup.string()
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
  paymentcard_code: Yup.number()
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
  paymentcard_expiremonth: Yup.number()
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
  paymentcard_expireyear: Yup.number()
    .nullable("Campo não pôde ficar vazio")
    .required("Campo Obrigatorio"),
});

const ModalCheckout = () => {
  const dispatch  = useDispatch()
  const [purchase, {data}] = useSendPurchaseOrderMutation();
  const { carrinho } = useSelector((state: RootState) => state.carrinhoManager);

  const getValorTotal = () => {
    return carrinho.reduce((acumulator, currentRow) => {
      return (acumulator += currentRow.price);
    }, 0);
  };

  const getProdutos = (): Product[] => {
    const Products:Product[] = []

    carrinho.map(row => (
        Products.push({
            id: row.nome + row.id,
            price: row.price
        })
    ))
    return Products
  }

  const { acaoCodigo } = useSelector((state: RootState) => state.modalManager);

  const onSubmitFormik = (values: FormikValues) => {
    purchase({
      delivery: {
        receiver: values.delivery_fullname,
        address: {
          description: values.delivery_address,
          city: values.delivery_city,
          zipCode: values.delivery_zip,
          number: Number(values.delivery_number),
          complement: values.delivery_observe,
        },
      },
      payment: {
        card: {
          name: values.paymentcard_nome,
          number: values.paymentcard_number,
          code: values.paymentcard_code,
          expires: {
            month: values.paymentcard_expiremonth,
            year: values.paymentcard_expireyear,
          },
        },
      },
      products: getProdutos()
    });

    dispatch(OpenModal(EnumAcoes.ACAO_SUCESS));
  };

  return (
    <S.ModalRight>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitFormik}
        validationSchema={validationSchema}
      >
        <Form>
          {acaoCodigo === EnumAcoes.ACAO_CHECKOUT && <ModalEntrega />}
          {acaoCodigo === EnumAcoes.ACAO_PAYMENT && <ModalPagamento valorTotal={getValorTotal()} />}
          {acaoCodigo === EnumAcoes.ACAO_SUCESS && <ModalSucesso orderId={data?.orderId}/>}
        </Form>
      </Formik>
    </S.ModalRight>
  );
};

export default ModalCheckout;
